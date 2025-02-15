import { getScaleForY, addLogMessage, addPointAnimation, drawRoundedRect } from './util.js';
import { levels, initLevels } from './levels.js';
import { Projectile, Target, Obstacle, Particle, Cloud, Bird, SpaceStar, WinFallingItem } from './entities.js';
import { Player } from './player.js';
import { drawPanda } from './entities.js';

/* 
  Helper function for circle-rectangle collision.
  It calculates the closest point on the rectangle to the circle center
  and checks if the distance is less than the circle's radius.
*/
function rectCircleColliding(rx, ry, rw, rh, cx, cy, cr) {
  const closestX = Math.min(Math.max(cx, rx), rx + rw);
  const closestY = Math.min(Math.max(cy, ry), ry + rh);
  const dx = cx - closestX;
  const dy = cy - closestY;
  return (dx * dx + dy * dy) < (cr * cr);
}

let paused = false;

/* 
  draw3DButton draws a button with a 3D effect.
  It uses a linear gradient, shadow, and a rounded rectangle (imported from util.js).
*/
function draw3DButton(ctx, x, y, width, height, text) {
  ctx.save();
  const grad = ctx.createLinearGradient(x, y, x, y + height);
  grad.addColorStop(0, "#ffccdd");
  grad.addColorStop(1, "#ff6699");
  ctx.fillStyle = grad;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
  // Draw button background using rounded rectangle.
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

/* 
  winRestartHandler: When the user clicks on the restart button on the win screen,
  this handler checks if the click occurred inside the button’s bounds and, if so,
  calls the global restart function.
*/
function winRestartHandler(e) {
  const rect = game.canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  // Updated restart button coordinates: drawn at (canvas.width/2 - 70, canvas.height - 100) with width 140, height 50.
  const btnX = game.canvas.width / 2 - 70;
  const btnY = game.canvas.height - 100;
  const btnW = 140;
  const btnH = 50;
  if (x >= btnX && x <= btnX + btnW && y >= btnY && y <= btnY + btnH) {
    window.restartGame();
    game.canvas.removeEventListener("click", winRestartHandler);
    game.winRestartListenerAdded = false;
  }
}

/* 
  spawnExplosion: When a falling target explodes, spawn particles.
  Spawns 10 particles with random directions and speeds that last 800ms.
  Particle radius increased to 10 for better visibility.
*/
function spawnExplosion(x, y) {
  for (let i = 0; i < 10; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 100 + 50;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    window.game.particles.push(new Particle(x, y, vx, vy, 800, 10));
  }
}

/* 
  spawnHeartParticles: When two win screen pandas collide, spawn 5 red heart particles.
  These particles are as big as a panda head (approximately 40px), emit in random directions,
  and disappear after 2000ms. Added a stroke to the heart shape for better visibility.
*/
function spawnHeartParticles(x, y) {
  for (let i = 0; i < 5; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 80 + 20;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    window.game.particles.push({
      x: x,
      y: y,
      vx: vx,
      vy: vy,
      life: 2000,
      maxLife: 2000,
      update: function(deltaTime) {
        this.x += this.vx * deltaTime / 1000;
        this.y += this.vy * deltaTime / 1000;
        this.life -= deltaTime;
      },
      draw: function(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        // Draw a red solid heart with a classic shape (~40px in size)
        const heartSize = 40;
        ctx.moveTo(0, heartSize * 0.25);
        ctx.bezierCurveTo(-heartSize * 0.5, -heartSize * 0.2, -heartSize * 0.5, heartSize * 0.6, 0, heartSize);
        ctx.bezierCurveTo(heartSize * 0.5, heartSize * 0.6, heartSize * 0.5, -heartSize * 0.2, 0, heartSize * 0.25);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }
    });
  }
}

/* 
  drawWinScreen() draws the win screen when the game state is "win".
  It clears the canvas, draws the background (using the sky color of the last level),
  then animates:
    - Falling targets (hearts and stars) that explode after their random explosionTime expires.
    - Dancing pandas that move around and, upon colliding with each other, spawn 5 red heart particles.
  It also displays a congratulatory message with the number of pandas rescued,
  split into two lines with "Congratulations!" in a larger font.
  Finally, it draws a Restart button at the bottom.
*/
function drawWinScreen() {
  // Ensure winPandas and winFallingTargets are initialized if undefined or empty.
  if (!game.winPandas || game.winPandas.length === 0) {
    game.winPandas = [];
    for (let i = 0; i < 5; i++) {
      game.winPandas.push({
        x: Math.random() * game.canvas.width,
        y: Math.random() * game.canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        time: 0,
        gender: Math.random() < 0.5 ? "female" : "male",
        collisionCooldown: 0
      });
    }
  }
  if (!game.winFallingTargets || game.winFallingTargets.length === 0) {
    game.winFallingTargets = [];
    for (let i = 0; i < 15; i++) {
      game.winFallingTargets.push(new WinFallingItem());
    }
  }
  
  // Clear canvas.
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  // Draw background.
  game.ctx.fillStyle = levels[game.currentLevelIndex].skyColor;
  game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
  
  // Draw congratulatory message split in two lines.
  game.ctx.save();
  game.ctx.font = "32px sans-serif";
  game.ctx.fillStyle = "#fff";
  game.ctx.textAlign = "center";
  game.ctx.fillText("Congratulations!", game.canvas.width / 2, 60);
  game.ctx.font = "28px sans-serif";
  game.ctx.fillText(`You rescued ${game.rescuedPandas.length} pandas!`, game.canvas.width / 2, 100);
  game.ctx.restore();
  
  // Process falling targets.
  game.winFallingTargets.forEach((item, index) => {
    item.update(16);
    item.draw(game.ctx);
    // When explosionTime expires, spawn explosion and replace the item.
    if (item.explosionTime <= 0) {
      spawnExplosion(item.x, item.y);
      game.winFallingTargets[index] = new WinFallingItem();
    }
  });
  
  // Process dancing pandas and check for collisions.
  game.winPandas.forEach(panda => {
    if (panda.collisionCooldown === undefined) {
      panda.collisionCooldown = 0;
    } else if (panda.collisionCooldown > 0) {
      panda.collisionCooldown -= 16;
    }
  });
  for (let i = 0; i < game.winPandas.length; i++) {
    for (let j = i + 1; j < game.winPandas.length; j++) {
      const p1 = game.winPandas[i];
      const p2 = game.winPandas[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Updated collision threshold to 80 for better detection.
      if (dist < 80 && p1.collisionCooldown <= 0 && p2.collisionCooldown <= 0) {
        // Spawn heart particles at collision point.
        spawnHeartParticles((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        p1.collisionCooldown = 1000;
        p2.collisionCooldown = 1000;
      }
    }
  }
  
  game.winPandas.forEach(panda => {
    panda.x += panda.dx;
    panda.y += panda.dy;
    if (panda.x < 0 || panda.x > game.canvas.width) panda.dx *= -1;
    if (panda.y < 0 || panda.y > game.canvas.height) panda.dy *= -1;
    panda.time += 16;
    drawPanda(game.ctx, panda.x, panda.y, 40, panda.time, panda.gender);
  });
  
  // Draw Restart button with updated coordinates.
  draw3DButton(game.ctx, game.canvas.width / 2 - 70, game.canvas.height - 100, 140, 50, "Restart");
  if (!game.winRestartListenerAdded) {
    game.winRestartListenerAdded = true;
    game.canvas.addEventListener("click", winRestartHandler);
  }
}

export function gameLoop(timestamp) {
  if (!game.lastTime) game.lastTime = timestamp;
  const deltaTime = timestamp - game.lastTime;
  game.lastTime = timestamp;
  
  if (game.state === "win") {
    drawWinScreen();
    requestAnimationFrame(gameLoop);
    return;
  }
  
  updateGame(deltaTime);
  drawGame();
  requestAnimationFrame(gameLoop);
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
    rescuedPandas: [], // To track rescued pandas.
    scrollOffset: 0,
    score: 0,
    spawnTimer: 0,
    lastTime: 0,
    currentLevelIndex: 0,
    // Will be initialized when win condition is reached.
    winPandas: [],
    winFallingTargets: [],
    winRestartListenerAdded: false
  };
  window.game = game;
  return game;
}

/* 
  updateGame: Updates all game objects, handles collisions, spawns new objects,
  and triggers level progression. When 200 points are reached, a level is completed.
  Upon finishing the last level, win animations (dancing pandas and falling targets)
  are initialized.
*/
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
  
  // Check projectile collisions (ignoring pandas).
  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    const proj = game.projectiles[i];
    for (let j = 0; j < game.targets.length; j++) {
      const target = game.targets[j];
      if (target.type === "panda") continue;
      const dx = proj.x - target.x;
      const dy = proj.y - target.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < proj.radius + target.size / 2 * getScaleForY(target.y, game.canvas.height)) {
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
  
  // Player-body collision with hearts/stars.
  game.targets.forEach(target => {
    if ((target.type === "heart" || target.type === "star") && !target.hit) {
      if (rectCircleColliding(
          game.player.x - game.player.width / 2,
          game.player.y - game.player.height,
          game.player.width,
          game.player.height,
          target.x,
          target.y,
          target.size / 2 * getScaleForY(target.y, game.canvas.height)
        )) {
        target.hit = true;
        addPointAnimation("+" + target.scoreValue, target.x, target.y, game.pointAnimations);
        game.score += target.scoreValue;
        addLogMessage(`${game.player.avatar} collected ${target.label}`, game.logMessages);
      }
    }
  });
  
  // Panda rescue: if a free panda is inside the backpack, start its collection animation.
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
  
  // Obstacle collision (body only).
  game.obstacles.forEach((obs, index) => {
    if (rectCircleColliding(
          game.player.x - game.player.width / 2,
          game.player.y - game.player.height,
          game.player.width,
          game.player.height,
          obs.x + obs.size / 2,
          obs.y + obs.size / 2,
          obs.size / 2 * getScaleForY(obs.y, game.canvas.height)
        )) {
      game.score = Math.max(0, game.score - 5);
      addPointAnimation("-5", game.player.x, game.player.y, game.pointAnimations);
      addLogMessage(`${game.player.avatar} hit an obstacle`, game.logMessages);
      window.playerShakeTime = 500;
      game.obstacles.splice(index, 1);
    }
  });
  
  // Projectiles remove obstacles.
  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    const proj = game.projectiles[i];
    for (let j = game.obstacles.length - 1; j >= 0; j--) {
      const obs = game.obstacles[j];
      const dx = proj.x - obs.x;
      const dy = proj.y - obs.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < proj.radius + obs.size / 2 * getScaleForY(obs.y, game.canvas.height)) {
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
  
  // Level progression: each level requires 200 points.
  if (game.score >= 200) {
    if (game.currentLevelIndex < levels.length - 1) {
      // Proceed to next level.
      game.score = 0;
      game.currentLevelIndex++;
      game.targets = [];
      game.obstacles = [];
      game.decorations = [];
      game.scrollOffset = 0;
      if (levels[game.currentLevelIndex].name !== "Space") {
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
      // Win condition reached.
      if (!game.winPandas || game.winPandas.length === 0) {
        game.winPandas = [];
        // Create 5 dancing pandas with random positions, slight movement, and collision cooldown.
        for (let i = 0; i < 5; i++) {
          game.winPandas.push({
            x: Math.random() * game.canvas.width,
            y: Math.random() * game.canvas.height,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
            time: 0,
            gender: Math.random() < 0.5 ? "female" : "male",
            collisionCooldown: 0
          });
        }
      }
      if (!game.winFallingTargets || game.winFallingTargets.length === 0) {
        game.winFallingTargets = [];
        // Create 15 falling targets (hearts or stars) for the win screen.
        for (let i = 0; i < 15; i++) {
          game.winFallingTargets.push(new WinFallingItem());
        }
      }
      game.state = "win";
    }
  }
}

/* 
  drawGame: Draws the current game state including sky, ground, objects, progress bar, and menu button.
  The progress bar is fixed to a level goal of 200 points.
*/
export function drawGame() {
  if (game.state === "win") return;
  
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  
  // Draw sky.
  const skyHeight = game.canvas.height * 0.2;
  game.ctx.fillStyle = levels[game.currentLevelIndex].skyColor;
  game.ctx.fillRect(0, 0, game.canvas.width, skyHeight);
  
  // Draw clouds/birds or space stars.
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
  
  // Draw progress bar (fixed goal of 200 points).
  game.ctx.save();
  const levelGoal = 200;
  const progressBarWidth = Math.max(100, game.canvas.width * 0.5);
  const progress = Math.min(1, game.score / levelGoal);
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
  
  // Draw level indicator under progress bar.
  game.ctx.fillStyle = "#333";
  game.ctx.font = "16px sans-serif";
  game.ctx.textAlign = "right";
  game.ctx.fillText(`Level ${game.currentLevelIndex + 1}/${levels.length}`, game.canvas.width - 20, barY + barHeight + 20);
  
  game.ctx.restore();
  
  // Draw menu button at top-left.
  draw3DButton(game.ctx, 20, 20, 80, 30, "Menu");
}

export { rectCircleColliding };
