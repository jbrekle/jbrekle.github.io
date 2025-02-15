// game.js – Main game loop, update/draw, and initialization

import { getScaleForY, addLogMessage, addPointAnimation } from './util.js';
import { levels, initLevels } from './levels.js';
import { Projectile, Target, Obstacle, Particle, Cloud, Bird, SpaceStar } from './entities.js';
import { Player } from './player.js';

// Simple collision helper
function rectCircleColliding(rx, ry, rw, rh, cx, cy, cr) {
  const closestX = Math.min(Math.max(cx, rx), rx + rw);
  const closestY = Math.min(Math.max(cy, ry), ry + rh);
  const dx = cx - closestX;
  const dy = cy - closestY;
  return (dx * dx + dy * dy) < (cr * cr);
}

// Local pause flag
let paused = false;

// Helper: draw 3D-style button
function draw3DButton(ctx, x, y, width, height, text) {
  ctx.save();
  const grad = ctx.createLinearGradient(x, y, x, y + height);
  grad.addColorStop(0, "#ffccdd");
  grad.addColorStop(1, "#ff6699");
  ctx.fillStyle = grad;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
  drawRoundedRect(ctx, x, y, width, height, 8);
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, x, y, width, height, 8);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.font = "16px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + width / 2, y + height / 2);
  ctx.restore();
}

// Helper: draw rounded rectangle
function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export let game;
export function initGame(canvas, avatar) {
  const ctx = canvas.getContext('2d');
  initLevels(ctx);
  game = {
    canvas,
    ctx,
    state: "playing",
    player: new Player(avatar),
    projectiles: [],
    targets: [],
    obstacles: [],
    decorations: [],
    clouds: [],
    birds: [],
    spaceStars: [],
    particles: [],
    pointAnimations: [],
    logMessages: [],
    rescuedPandas: [],
    scrollOffset: 0,
    score: 0,
    spawnTimer: 0,
    lastTime: 0,
    currentLevelIndex: 0
  };
  window.game = game;
  return game;
}

export function updateGame(deltaTime) {
  if (game.state === "win") return;
  const currentLevel = levels[game.currentLevelIndex];
  game.scrollOffset += currentLevel.scrollSpeed * deltaTime / 1000;
  game.player.update(deltaTime);
  if (currentLevel.name !== "Space") {
    game.clouds.forEach(cloud => cloud.update(deltaTime));
    game.birds.forEach(bird => bird.update(deltaTime));
  } else {
    game.spaceStars.forEach(star => star.update(deltaTime));
  }
  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    game.projectiles[i].update(deltaTime);
    if (game.projectiles[i].x < 0 || game.projectiles[i].x > game.canvas.width ||
        game.projectiles[i].y < 0 || game.projectiles[i].y > game.canvas.height)
      game.projectiles.splice(i, 1);
  }
  for (let i = game.targets.length - 1; i >= 0; i--) {
    game.targets[i].update(deltaTime, currentLevel.scrollSpeed);
    if (game.targets[i].y - game.targets[i].size * getScaleForY(game.targets[i].y, game.canvas.height) > game.canvas.height ||
       (game.targets[i].hit && ((game.targets[i].type === "heart" && game.targets[i].effectTime > 500) ||
                                (game.targets[i].type === "star" && game.targets[i].effectTime > 300))))
      game.targets.splice(i, 1);
  }
  for (let i = game.obstacles.length - 1; i >= 0; i--) {
    game.obstacles[i].update(deltaTime, currentLevel.scrollSpeed);
    if (game.obstacles[i].y > game.canvas.height) game.obstacles.splice(i, 1);
  }
  for (let i = game.decorations.length - 1; i >= 0; i--) {
    game.decorations[i].update(deltaTime, currentLevel.scrollSpeed);
    if (game.decorations[i].y > game.canvas.height) game.decorations.splice(i, 1);
  }
  for (let i = game.particles.length - 1; i >= 0; i--) {
    game.particles[i].update(deltaTime);
    if (game.particles[i].life <= 0) game.particles.splice(i, 1);
  }
  for (let i = game.pointAnimations.length - 1; i >= 0; i--) {
    game.pointAnimations[i].time += deltaTime;
    game.pointAnimations[i].y -= deltaTime * 0.03;
    if (game.pointAnimations[i].time > game.pointAnimations[i].lifetime)
      game.pointAnimations.splice(i, 1);
  }
  for (let i = game.logMessages.length - 1; i >= 0; i--) {
    game.logMessages[i].time += deltaTime;
    if (game.logMessages[i].time > game.logMessages[i].lifetime)
      game.logMessages.splice(i, 1);
  }
  game.rescuedPandas.forEach(p => p.time += deltaTime);
  
  // Projectile collisions (ignoring pandas)
  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    const proj = game.projectiles[i];
    for (let j = 0; j < game.targets.length; j++) {
      const target = game.targets[j];
      if (target.type === "panda") continue;
      const dx = proj.x - target.x;
      const dy = proj.y - target.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < proj.radius + target.size/2 * getScaleForY(target.y, game.canvas.height)) {
        if (target.type === "heart" || target.type === "star") {
          if (!target.hit) {
            target.hit = true;
            addPointAnimation("+" + target.scoreValue, target.x, target.y, game.pointAnimations);
            game.score += target.scoreValue;
            addLogMessage(`${game.player.avatar} collected ${target.label}`, game.logMessages);
          }
        }
        game.projectiles.splice(i, 1);
        break;
      }
    }
  }
  
  // Player-body collisions (remove this score counter text per instructions)
  game.targets.forEach(target => {
    if ((target.type === "heart" || target.type === "star") && !target.hit) {
      if (rectCircleColliding(game.player.x - game.player.width/2, game.player.y - game.player.height, game.player.width, game.player.height,
          target.x, target.y, target.size/2 * getScaleForY(target.y, game.canvas.height))) {
        target.hit = true;
        addPointAnimation("+" + target.scoreValue, target.x, target.y, game.pointAnimations);
        game.score += target.scoreValue;
        addLogMessage(`${game.player.avatar} collected ${target.label}`, game.logMessages);
      }
    }
  });
  
  // Panda rescue (dragged into backpack)
  game.targets.forEach(target => {
    if (target.type === "panda" && target.state === "free") {
      const bp = game.player.backpack;
      if (target.x > bp.x && target.x < bp.x + bp.width &&
          target.y > bp.y && target.y < bp.y + bp.height) {
        target.state = "beingCollected";
        target.collectionTimer = undefined;
      }
    }
  });
  
  // Obstacle collision (body only)
  game.obstacles.forEach((obs, index) => {
    if (rectCircleColliding(game.player.x - game.player.width/2, game.player.y - game.player.height, game.player.width, game.player.height,
        obs.x + obs.size/2, obs.y + obs.size/2, obs.size/2 * getScaleForY(obs.y, game.canvas.height))) {
      game.score = Math.max(0, game.score - 5);
      addPointAnimation("-5", game.player.x, game.player.y, game.pointAnimations);
      addLogMessage(`${game.player.avatar} hit an obstacle`, game.logMessages);
      window.playerShakeTime = 500;
      game.obstacles.splice(index, 1);
    }
  });
  
  // Projectiles remove obstacles
  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    const proj = game.projectiles[i];
    for (let j = game.obstacles.length - 1; j >= 0; j--) {
      const obs = game.obstacles[j];
      const dx = proj.x - obs.x;
      const dy = proj.y - obs.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < proj.radius + obs.size/2 * getScaleForY(obs.y, game.canvas.height)) {
        game.obstacles.splice(j, 1);
        game.projectiles.splice(i, 1);
        break;
      }
    }
  }
  
  // Spawn objects every 1 second.
  game.spawnTimer += deltaTime;
  if (game.spawnTimer > 1000) {
    const groundStart = game.canvas.height * 0.2;
    const spawnY = groundStart + 20;
    const r = Math.random();
    if (r < 0.4) {
      game.targets.push(new Target(Math.random() < 0.5 ? "heart" : "star", Math.random() * game.canvas.width, spawnY));
    } else if (r < 0.7) {
      game.targets.push(new Target("panda", Math.random() * game.canvas.width, spawnY));
    } else if (r < 0.8) {
      let obsType;
      if (levels[game.currentLevelIndex].name === "City") {
        const r2 = Math.random();
        obsType = r2 < 0.33 ? "car" : (r2 < 0.66 ? "person" : "bike");
      } else if (levels[game.currentLevelIndex].name === "Forest") {
        const r2 = Math.random();
        obsType = r2 < 0.33 ? "stone" : (r2 < 0.66 ? "mouse" : "mushroom");
      } else if (levels[game.currentLevelIndex].name === "Space") {
        const r2 = Math.random();
        obsType = r2 < 0.33 ? "planet" : (r2 < 0.66 ? "alien" : "rocket");
      }
      game.obstacles.push(new Obstacle(obsType, Math.random() * (game.canvas.width - 80) + 40, spawnY));
    } else {
      const sideX = Math.random() < 0.5 ? Math.random() * 50 + 10 : game.canvas.width - (Math.random() * 50 + 10);
      game.decorations.push(levels[game.currentLevelIndex].createDecoration(sideX, spawnY));
    }
    game.spawnTimer = 0;
  }
  
  // Level progression.
  if (game.score >= 200) {
    if (game.currentLevelIndex < levels.length - 1) {
      game.currentLevelIndex++;
      game.targets = [];
      game.obstacles = [];
      game.decorations = [];
      game.scrollOffset = 0;
      const newLevel = levels[game.currentLevelIndex];
      if (newLevel.name !== "Space") {
        game.clouds = [];
        game.birds = [];
        for (let i = 0; i < 5; i++) {
          game.clouds.push(new Cloud(Math.random() * game.canvas.width, Math.random() * game.canvas.height * 0.2, 10 + Math.random() * 10, 30 + Math.random() * 20));
        }
        for (let i = 0; i < 3; i++) {
          game.birds.push(new Bird(Math.random() * game.canvas.width, Math.random() * game.canvas.height * 0.2, 50 + Math.random() * 30));
        }
      } else {
        game.spaceStars = [];
        for (let i = 0; i < 50; i++) {
          game.spaceStars.push(new SpaceStar(Math.random() * game.canvas.width, Math.random() * game.canvas.height * 0.2));
        }
      }
    } else {
      game.state = "win";
      // Win screen will be triggered externally.
    }
  }
}

export function drawGame() {
  if (game.state === "win") return;
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  const skyHeight = game.canvas.height * 0.2;
  game.ctx.fillStyle = levels[game.currentLevelIndex].skyColor;
  game.ctx.fillRect(0, 0, game.canvas.width, skyHeight);
  if (levels[game.currentLevelIndex].name !== "Space") {
    game.clouds.forEach(cloud => cloud.draw(game.ctx));
    game.birds.forEach(bird => bird.draw(game.ctx));
  } else {
    game.spaceStars.forEach(star => star.draw(game.ctx));
  }
  if (game.logMessages.length > 0) {
    game.ctx.save();
    game.ctx.font = "20px sans-serif";
    game.ctx.fillStyle = "rgba(0,0,0,0.7)";
    game.ctx.textAlign = "center";
    game.ctx.fillText(game.logMessages[0].text, game.canvas.width / 2, 40);
    game.ctx.restore();
  }
  game.ctx.save();
  game.ctx.translate(0, skyHeight + (game.scrollOffset % 50));
  game.ctx.fillStyle = levels[game.currentLevelIndex].groundPattern;
  game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height - skyHeight);
  game.ctx.restore();
  game.decorations.forEach(dec => dec.draw(game.ctx));
  game.obstacles.forEach(obs => obs.draw(game.ctx, levels[game.currentLevelIndex].name));
  game.targets.forEach(target => {
    if (!(target.type === "panda" && target.state === "beingCollected"))
      target.draw(game.ctx, (y) => getScaleForY(y, game.canvas.height));
  });
  game.projectiles.forEach(proj => proj.draw(game.ctx));
  game.particles.forEach(p => p.draw(game.ctx));
  game.ctx.save();
  game.ctx.font = "20px sans-serif";
  game.ctx.textAlign = "center";
  game.pointAnimations.forEach(pa => {
    game.ctx.fillStyle = "rgba(0,128,0," + (1 - pa.time / pa.lifetime) + ")";
    game.ctx.fillText(pa.text, pa.x, pa.y);
  });
  game.ctx.restore();
  game.player.draw(game.ctx);
  // Removed the score counter label above the progress bar per instructions.
  game.ctx.save();
  const progressBarWidth = Math.max(100, game.canvas.width * 0.5);
  const progress = (game.score - (game.currentLevelIndex === 0 ? 0 : levels[game.currentLevelIndex - 1].scrollSpeed)) /
                     (levels[game.currentLevelIndex].scrollSpeed - (game.currentLevelIndex === 0 ? 0 : levels[game.currentLevelIndex - 1].scrollSpeed));
  const barX = game.canvas.width - progressBarWidth - 20;
  const barY = 50;
  const barHeight = 20;
  const grad = game.ctx.createLinearGradient(barX, barY, barX, barY + barHeight);
  grad.addColorStop(0, "#ff99a0");
  grad.addColorStop(1, "#ff3366");
  game.ctx.strokeStyle = "#333";
  game.ctx.lineWidth = 2;
  drawRoundedRect(game.ctx, barX, barY, progressBarWidth, barHeight, 10);
  game.ctx.stroke();
  game.ctx.save();
  game.ctx.beginPath();
  drawRoundedRect(game.ctx, barX, barY, progressBarWidth * progress, barHeight, 10);
  game.ctx.clip();
  game.ctx.fillStyle = grad;
  game.ctx.fillRect(barX, barY, progressBarWidth * progress, barHeight);
  game.ctx.restore();
  game.ctx.restore();
}


export function gameLoop(timestamp) {
  if (!game.lastTime) game.lastTime = timestamp;
  const deltaTime = timestamp - game.lastTime;
  game.lastTime = timestamp;
  if (!paused && game.state === "playing") {
    updateGame(deltaTime);
    drawGame();
    requestAnimationFrame(gameLoop);
  }
}

export { rectCircleColliding };
