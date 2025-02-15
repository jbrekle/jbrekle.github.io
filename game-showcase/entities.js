import { randomHeartLabel, randomStarLabel, getScaleForY, addPointAnimation, addLogMessage } from './util.js';
import { levels } from './levels.js';

/* 
  drawHeart: Draws a detailed heart shape using Bezier curves.
  The heart is filled with a linear gradient and displays a label.
*/
export function drawHeart(ctx, x, y, size, label) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, size * 0.3);
  ctx.bezierCurveTo(-size, -size * 0.2, -size * 1.1, size * 0.8, 0, size * 1.3);
  ctx.bezierCurveTo(size * 1.1, size * 0.8, size, -size * 0.2, 0, size * 0.3);
  ctx.closePath();
  let grad = ctx.createLinearGradient(-size, -size, size, size);
  grad.addColorStop(0, "#ff3366");
  grad.addColorStop(1, "#ff6699");
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = "#990033";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, size * 0.45);
  ctx.bezierCurveTo(-size * 0.3, size * 0.3, -size * 0.2, size * 0.8, 0, size * 0.9);
  ctx.bezierCurveTo(size * 0.2, size * 0.8, size * 0.3, size * 0.3, 0, size * 0.45);
  ctx.closePath();
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = `${size * 0.4}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, size * 0.65);
  ctx.restore();
}

/* 
  drawStar: Draws a detailed star with multiple spikes.
  It uses a radial gradient for a 3D effect and displays a label at its center.
*/
export function drawStar(ctx, x, y, size, label) {
  ctx.save();
  ctx.translate(x, y);
  const spikes = 5;
  const outerRadius = size;
  const innerRadius = size * 0.5;
  let rot = Math.PI / 2 * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  for (let i = 0; i < spikes; i++) {
    let x1 = Math.cos(rot) * outerRadius;
    let y1 = Math.sin(rot) * outerRadius;
    ctx.lineTo(x1, y1);
    rot += step;
    let x2 = Math.cos(rot) * innerRadius;
    let y2 = Math.sin(rot) * innerRadius;
    ctx.lineTo(x2, y2);
    rot += step;
  }
  ctx.closePath();
  let grad = ctx.createRadialGradient(0, 0, innerRadius, 0, 0, outerRadius);
  grad.addColorStop(0, "#ffeb3b");
  grad.addColorStop(1, "#fbc02d");
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = "#c79100";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, innerRadius * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.fillStyle = "#000";
  ctx.font = `${size * 0.3}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, 0);
  ctx.restore();
}

/* 
  drawPanda: Draws a cute panda with detailed features.
  Includes body, head, ears, eyes, nose, mouth and animated limbs.
*/
export function drawPanda(ctx, x, y, size, time, gender = "male") {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.ellipse(0, size * 0.3, size, size * 0.8, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -size * 0.2, size * 0.6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  const earOffsetX = size * 0.4;
  const earOffsetY = -size * 0.5;
  const earRadius = size * 0.2;
  ctx.beginPath();
  ctx.arc(-earOffsetX, earOffsetY, earRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-earOffsetX, earOffsetY, earRadius * 0.6, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(earOffsetX, earOffsetY, earRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(earOffsetX, earOffsetY, earRadius * 0.6, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  const eyeOffsetX = size * 0.25;
  const eyeOffsetY = -size * 0.2;
  const eyeRadius = size * 0.15;
  ctx.beginPath();
  ctx.arc(-eyeOffsetX, eyeOffsetY, eyeRadius, 0, Math.PI * 2);
  ctx.arc(eyeOffsetX, eyeOffsetY, eyeRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-eyeOffsetX - 2, eyeOffsetY - 2, eyeRadius * 0.5, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(eyeOffsetX - 2, eyeOffsetY - 2, eyeRadius * 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, -size * 0.05, size * 0.1, 0, Math.PI, false);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-size * 0.1, 0);
  ctx.quadraticCurveTo(0, size * 0.1, size * 0.1, 0);
  ctx.stroke();
  if (gender === "female") {
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.6);
    ctx.lineTo(-size * 0.3, -size * 0.8);
    ctx.lineTo(0, -size * 0.7);
    ctx.lineTo(size * 0.3, -size * 0.8);
    ctx.closePath();
    ctx.fillStyle = "#ff69b4";
    ctx.fill();
    ctx.stroke();
  }
  const limbOffset = Math.sin(time / 200) * size * 0.1;
  // Draw animated legs (moving for a dancing effect)
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(-size * 0.7 + limbOffset, size * 0.2, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(size * 0.7 - limbOffset, size * 0.2, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-size * 0.4 + limbOffset, size * 0.9, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(size * 0.4 - limbOffset, size * 0.9, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

/* 
  drawRocket: Draws a detailed rocket with multiple parts:
  - Rocket body with a gradient.
  - Rocket tip in red.
  - Fins on both sides.
  - An exhaust flame at the bottom.
*/
export function drawRocket(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  // Rocket body: a triangular shape with a gradient.
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.8);
  ctx.lineTo(size * 0.3, size * 0.4);
  ctx.lineTo(-size * 0.3, size * 0.4);
  ctx.closePath();
  let grad = ctx.createLinearGradient(0, -size * 0.8, 0, size * 0.4);
  grad.addColorStop(0, "#ddd");
  grad.addColorStop(1, "#aaa");
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = "#555";
  ctx.stroke();
  // Rocket tip.
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.8);
  ctx.lineTo(size * 0.15, -size * 0.6);
  ctx.lineTo(-size * 0.15, -size * 0.6);
  ctx.closePath();
  ctx.fillStyle = "#ff4444";
  ctx.fill();
  ctx.stroke();
  // Left fin.
  ctx.beginPath();
  ctx.moveTo(-size * 0.3, size * 0.4);
  ctx.lineTo(-size * 0.45, size * 0.2);
  ctx.lineTo(-size * 0.3, size * 0.2);
  ctx.closePath();
  ctx.fillStyle = "#ffcc00";
  ctx.fill();
  ctx.stroke();
  // Right fin.
  ctx.beginPath();
  ctx.moveTo(size * 0.3, size * 0.4);
  ctx.lineTo(size * 0.45, size * 0.2);
  ctx.lineTo(size * 0.3, size * 0.2);
  ctx.closePath();
  ctx.fillStyle = "#ffcc00";
  ctx.fill();
  ctx.stroke();
  // Exhaust flame.
  ctx.beginPath();
  ctx.moveTo(-size * 0.15, size * 0.4);
  ctx.bezierCurveTo(-size * 0.15, size * 0.7, size * 0.15, size * 0.7, size * 0.15, size * 0.4);
  ctx.closePath();
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.restore();
}

/* 
  Projectile: Represents a moving projectile that leaves a fading trail.
*/
export class Projectile {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = 6;
    this.trail = [];
  }
  update(deltaTime) {
    this.trail.push({ x: this.x, y: this.y, time: Date.now() });
    const now = Date.now();
    this.trail = this.trail.filter(p => now - p.time < 200);
    this.x += this.vx * deltaTime / 1000;
    this.y += this.vy * deltaTime / 1000;
  }
  draw(ctx) {
    ctx.save();
    for (let i = 0; i < this.trail.length; i++) {
      const t = this.trail[i];
      const alpha = (i + 1) / this.trail.length * 0.5;
      ctx.fillStyle = `rgba(255,69,0,${alpha})`;
      ctx.beginPath();
      ctx.arc(t.x, t.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/* 
  Target: Represents a target that can be a heart, star, or panda.
  For pandas, a collection animation is played when dragged into the backpack.
*/
export class Target {
  constructor(type, x, y) {
    this.type = type; // "heart", "star", "panda"
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.hit = false;
    this.effectTime = 0;
    this.size = 60;
    if (type === "heart") {
      this.scoreValue = 15;
      this.label = randomHeartLabel();
    } else if (type === "star") {
      this.scoreValue = 20;
      this.label = randomStarLabel();
    } else if (type === "panda") {
      this.scoreValue = 25;
      this.gender = Math.random() < 0.5 ? "female" : "male";
      this.state = "free"; // "free", "beingCollected", "collected"
      this.animationTime = 0;
      this.collectionTimer = undefined;
    }
  }
  update(deltaTime, scrollSpeed) {
    if (this.type !== "panda" || this.state === "free") {
      this.y += scrollSpeed * deltaTime / 1000;
    }
    if (this.hit) this.effectTime += deltaTime;
    if (this.type === "panda" && this.state === "free") {
      this.animationTime += deltaTime;
    }
    // Panda collection animation: slide from above the backpack to its center.
    if (this.type === "panda" && this.state === "beingCollected") {
      if (this.collectionTimer === undefined) {
        this.collectionTimer = 0;
      } else {
        this.collectionTimer += deltaTime;
        const t = Math.min(this.collectionTimer / 500, 1);
        const bp = window.game.player.backpack;
        const targetY = bp.y + bp.height / 2;
        this.y = (1 - t) * (bp.y - 20) + t * targetY;
        if (t >= 1) {
          this.state = "collected";
          // Award points and trigger backpack jiggle, and also show a point increase indication.
          addPointAnimation("+" + this.scoreValue, window.game.player.backpack.x + window.game.player.backpack.width / 2, window.game.player.backpack.y, window.game.pointAnimations);
          window.game.score += this.scoreValue;
          addLogMessage(`${window.game.player.avatar} rescued a panda`, window.game.logMessages);
          window.game.player.backpackJiggleTime = 500;
        }
      }
    }
  }
  draw(ctx, scaleFunc) {
    ctx.save();
    const scale = scaleFunc(this.y);
    ctx.translate(this.x, this.y);
    ctx.scale(scale, scale);
    if (this.type === "heart") {
      const extra = this.hit ? this.effectTime / 500 : 0;
      ctx.globalAlpha = this.hit ? Math.max(1 - this.effectTime / 500, 0) : 1;
      drawHeart(ctx, 0, 0, this.size / 2 + extra, this.label);
    } else if (this.type === "star") {
      const extra = this.hit ? this.effectTime / 300 : 0;
      ctx.globalAlpha = this.hit ? Math.max(1 - this.effectTime / 300, 0) : 1;
      drawStar(ctx, 0, 0, this.size / 2 + extra, this.label);
    } else if (this.type === "panda") {
      if (this.state === "free" || this.state === "beingCollected") {
        drawPanda(ctx, 0, 0, this.size / 2, this.animationTime, this.gender);
      }
    }
    ctx.restore();
  }
}

/* 
  Decoration: Draws environmental elements.
  Detailed rework: Each decoration is built from multiple shapes.
  For City: 
    - Building: main body, windows (grid), door, roof.
    - Lamp: base, pole, lamp head, light rays.
  For Forest:
    - Tree: trunk, branches, leaves cluster, roots.
    - Bush: base, overlapping leaf circles.
  For Space:
    - Satellite: main body, solar panels, antenna, thrusters.
    - Comet: head, tail gradient, and particle trail.
*/
export class Decoration {
  constructor(type, x, y, levelName) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.size = 80;
    this.levelName = levelName;
  }
  update(deltaTime, scrollSpeed) {
    this.y += scrollSpeed * deltaTime / 1000;
  }
  draw(ctx) {
    ctx.save();
    const scale = getScaleForY(this.y, window.innerHeight);
    ctx.translate(this.x, this.y);
    ctx.scale(scale, scale);
    if (this.levelName === "City") {
      if (this.type === "building") {
        // Building base: a rectangle.
        ctx.fillStyle = "#666";
        ctx.fillRect(-20, -40, 40, 80);
        // Roof: a triangle on top.
        ctx.beginPath();
        ctx.moveTo(-22, -40);
        ctx.lineTo(0, -60);
        ctx.lineTo(22, -40);
        ctx.closePath();
        ctx.fillStyle = "#444";
        ctx.fill();
        // Windows: grid of small rectangles.
        ctx.fillStyle = "#ffd700";
        for (let y = -35; y < 40; y += 15) {
          for (let x = -15; x < 15; x += 15) {
            ctx.fillRect(x, y, 8, 10);
          }
        }
        // Door.
        ctx.fillStyle = "#330000";
        ctx.fillRect(-7, 20, 14, 20);
      } else if (this.type === "lamp") {
        // Lamp base.
        ctx.fillStyle = "#444";
        ctx.fillRect(-5, 0, 10, 5);
        // Pole.
        ctx.fillStyle = "#888";
        ctx.fillRect(-2, -30, 4, 30);
        // Lamp head: a semi-circle.
        ctx.beginPath();
        ctx.arc(0, -30, 8, Math.PI, 0);
        ctx.fillStyle = "#ffcc00";
        ctx.fill();
        // Light rays.
        ctx.strokeStyle = "rgba(255,255,0,0.5)";
        ctx.lineWidth = 2;
        for (let i = -1; i <= 1; i += 0.5) {
          ctx.beginPath();
          ctx.moveTo(i * 8, -30);
          ctx.lineTo(i * 12, -42);
          ctx.stroke();
        }
      }
    } else if (this.levelName === "Forest") {
      if (this.type === "tree") {
        // Trunk.
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(-5, 0, 10, 30);
        // Branches (3 simple lines).
        ctx.strokeStyle = "#8B4513";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(-10, 0);
        ctx.moveTo(0, 15);
        ctx.lineTo(10, 5);
        ctx.stroke();
        // Foliage: several overlapping circles.
        ctx.fillStyle = "#228B22";
        for (let i = -15; i <= 15; i += 10) {
          ctx.beginPath();
          ctx.arc(i, -10, 12, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (this.type === "bush") {
        // Multiple overlapping circles for a bush.
        ctx.fillStyle = "#2E8B57";
        for (let i = -10; i <= 10; i += 10) {
          for (let j = -10; j <= 10; j += 10) {
            ctx.beginPath();
            ctx.arc(i, j, 10, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    } else if (this.levelName === "Space") {
      if (this.type === "satellite") {
        // Main body.
        ctx.fillStyle = "#ccc";
        ctx.fillRect(-10, -10, 20, 20);
        // Detail: small windows.
        ctx.fillStyle = "#999";
        for (let i = -8; i <= 8; i += 8) {
          for (let j = -8; j <= 8; j += 8) {
            ctx.fillRect(i, j, 4, 4);
          }
        }
        // Solar panels.
        ctx.fillStyle = "#88f";
        ctx.fillRect(-30, -8, 15, 16);
        ctx.fillRect(15, -8, 15, 16);
        // Antenna.
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.lineTo(0, -20);
        ctx.strokeStyle = "#666";
        ctx.lineWidth = 2;
        ctx.stroke();
        // Thruster details.
        ctx.beginPath();
        ctx.arc(0, 10, 3, 0, Math.PI * 2);
        ctx.fillStyle = "orange";
        ctx.fill();
      } else if (this.type === "comet") {
        // Comet head.
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
        // Tail: gradient from white to transparent.
        let grad = ctx.createLinearGradient(0, 0, -30, 10);
        grad.addColorStop(0, "rgba(255,255,255,0.8)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-30, 10);
        ctx.stroke();
        // Small debris particles.
        ctx.fillStyle = "#ddd";
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(-10 - i * 3, 5 + i * 2, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.restore();
  }
}

/* 
  Obstacle: Draws obstacles.
  Detailed rework for multiple types using around 10 primitive shapes with comments.
*/
export class Obstacle {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.size = 60;
  }
  update(deltaTime, scrollSpeed) {
    this.y += scrollSpeed * deltaTime / 1000;
  }
  draw(ctx, levelName) {
    ctx.save();
    const scale = getScaleForY(this.y, window.innerHeight);
    ctx.translate(this.x, this.y);
    ctx.scale(scale, scale);
    if (levelName === "City") {
      if (this.type === "car") {
        // Car composed of multiple parts:
        // 1. Main body (a trapezoid).
        ctx.beginPath();
        ctx.moveTo(-30, -10); // Left front
        ctx.lineTo(30, -10);  // Right front
        ctx.lineTo(25, 10);   // Right back
        ctx.lineTo(-25, 10);  // Left back
        ctx.closePath();
        let grad = ctx.createLinearGradient(-30, -10, 30, 10);
        grad.addColorStop(0, "#333");
        grad.addColorStop(1, "#777");
        ctx.fillStyle = grad;
        ctx.fill();
        // 2. Windows: small rectangles.
        ctx.fillStyle = "#aaf";
        ctx.fillRect(-20, -5, 40, 8);
        // 3. Wheels: two circles.
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(-20, 15, 8, 0, Math.PI * 2); // Left wheel
        ctx.fill();
        ctx.beginPath();
        ctx.arc(20, 15, 8, 0, Math.PI * 2);  // Right wheel
        ctx.fill();
        // 4. Headlights: two small circles.
        ctx.fillStyle = "#ffddaa";
        ctx.beginPath();
        ctx.arc(28, -5, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(22, -5, 3, 0, Math.PI * 2);
        ctx.fill();
        // 5. Grille: a series of short lines.
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 1;
        for (let i = -10; i < 10; i += 4) {
          ctx.beginPath();
          ctx.moveTo(i, -10);
          ctx.lineTo(i, -5);
          ctx.stroke();
        }
      } else if (this.type === "person") {
        // Person composed of:
        // 1. Head: circle.
        ctx.fillStyle = "#ffe0bd";
        ctx.beginPath();
        ctx.arc(0, -20, 12, 0, Math.PI * 2);
        ctx.fill();
        // 2. Body: rectangle.
        ctx.fillStyle = "#ff6699";
        ctx.fillRect(-10, -8, 20, 30);
        // 3. Arms: lines.
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineTo(-20, 10);
        ctx.moveTo(10, 0);
        ctx.lineTo(20, 10);
        ctx.stroke();
        // 4. Legs: simple lines.
        ctx.beginPath();
        ctx.moveTo(-5, 22);
        ctx.lineTo(-5, 40);
        ctx.moveTo(5, 22);
        ctx.lineTo(5, 40);
        ctx.stroke();
      } else if (this.type === "bike") {
        // Bike composed of:
        // 1. Two wheels.
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(-15, 10, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(15, 10, 10, 0, Math.PI * 2);
        ctx.stroke();
        // 2. Frame: connecting lines.
        ctx.beginPath();
        ctx.moveTo(-15, 10);
        ctx.lineTo(0, -5);
        ctx.lineTo(15, 10);
        ctx.stroke();
        // 3. Handlebar.
        ctx.beginPath();
        ctx.moveTo(0, -5);
        ctx.lineTo(0, 10);
        ctx.stroke();
      }
    } else if (levelName === "Forest") {
      if (this.type === "stone") {
        // Stone with an irregular oval shape.
        ctx.beginPath();
        ctx.ellipse(0, 0, 25, 15, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#888";
        ctx.fill();
        ctx.strokeStyle = "#555";
        ctx.stroke();
      } else if (this.type === "mouse") {
        // Mouse: a small oval body, two ears, and eyes.
        ctx.beginPath();
        ctx.ellipse(0, 0, 20, 10, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#aaa";
        ctx.fill();
        // Ears.
        ctx.beginPath();
        ctx.arc(-15, -10, 4, 0, Math.PI * 2);
        ctx.arc(15, -10, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#888";
        ctx.fill();
        // Eyes.
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(-10, -5, 2, 0, Math.PI * 2);
        ctx.arc(10, -5, 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (this.type === "mushroom") {
        // Mushroom: cap, stem, and spots.
        // Stem.
        ctx.fillStyle = "#fff";
        ctx.fillRect(-5, 0, 10, 15);
        // Cap.
        ctx.beginPath();
        ctx.arc(0, 0, 15, Math.PI, 0);
        ctx.fillStyle = "#ff6699";
        ctx.fill();
        // Spots on cap.
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(-5, -5, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(5, -5, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, -10, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (levelName === "Space") {
      if (this.type === "planet") {
        // Detailed planet composed of:
        // 1. Planet body (a circle with gradient).
        let grad = ctx.createRadialGradient(0, 0, 10, 0, 0, 30);
        grad.addColorStop(0, "#66ccff");
        grad.addColorStop(1, "#003366");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0, Math.PI * 2);
        ctx.fill();
        // 2. Planet ring (an ellipse around the planet).
        ctx.beginPath();
        ctx.ellipse(0, 0, 35, 10, Math.PI / 4, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.6)";
        ctx.lineWidth = 2;
        ctx.stroke();
        // 3. Crater details (small dark circles).
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.beginPath();
        ctx.arc(-10, 5, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(15, -5, 2, 0, Math.PI * 2);
        ctx.fill();
        // 4. Additional texture: random speckles.
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(Math.random()*20-10, Math.random()*20-10, 1.5, 0, Math.PI*2);
          ctx.fill();
        }
      } else if (this.type === "alien") {
        // Detailed alien composed of:
        // 1. Head: an oval shape.
        ctx.beginPath();
        ctx.ellipse(0, 0, 25, 20, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#7fff00"; // bright green
        ctx.fill();
        ctx.strokeStyle = "#006400";
        ctx.stroke();
        // 2. Eyes: two small circles.
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(-8, -5, 3, 0, Math.PI * 2);
        ctx.arc(8, -5, 3, 0, Math.PI * 2);
        ctx.fill();
        // 3. Antennae: two lines with small circles at tips.
        ctx.beginPath();
        ctx.moveTo(-10, -15);
        ctx.lineTo(-15, -25);
        ctx.moveTo(10, -15);
        ctx.lineTo(15, -25);
        ctx.strokeStyle = "#006400";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(-15, -25, 2, 0, Math.PI * 2);
        ctx.arc(15, -25, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#006400";
        ctx.fill();
        // 4. Body: a simple line.
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(0, 30);
        ctx.stroke();
        // 5. Additional texture: spots on head.
        ctx.fillStyle = "#556B2F";
        ctx.beginPath();
        ctx.arc(5, 2, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(-5, 2, 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (this.type === "rocket") {
        drawRocket(ctx, 0, 0, 40);
      }
    }
    ctx.restore();
  }
}

/* 
  Particle: Represents a small particle used for effects such as explosions.
*/
export class Particle {
  constructor(x, y, vx, vy, life) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.life = life;
    this.maxLife = life;
  }
  update(deltaTime) {
    this.x += this.vx * deltaTime / 1000;
    this.y += this.vy * deltaTime / 1000;
    this.life -= deltaTime;
  }
  draw(ctx) {
    if (this.life > 0) {
      const alpha = this.life / this.maxLife;
      ctx.fillStyle = `rgba(255,215,0,${alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

/* 
  Cloud: Draws a simple cloud.
*/
export class Cloud {
  constructor(x, y, speed, size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
  }
  update(deltaTime) {
    this.x += this.speed * deltaTime / 1000;
    if (this.x - this.size > window.innerWidth) this.x = -this.size;
  }
  draw(ctx) {
    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/* 
  Bird: Draws a simple bird with animated wings.
*/
export class Bird {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.wingTime = 0;
  }
  update(deltaTime) {
    this.x += this.speed * deltaTime / 1000;
    this.wingTime += deltaTime;
    if (this.x > window.innerWidth + 20) this.x = -20;
  }
  draw(ctx) {
    ctx.save();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    const wing = Math.sin(this.wingTime / 200) * 5;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - 10, this.y - wing);
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 10, this.y - wing);
    ctx.stroke();
    ctx.restore();
  }
}

/* 
  SpaceStar: Draws a small twinkling star in space.
*/
export class SpaceStar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = Math.random();
  }
  update(deltaTime) {
    this.alpha += (Math.random() - 0.5) * 0.01;
    this.alpha = Math.max(0.3, Math.min(1, this.alpha));
  }
  draw(ctx) {
    ctx.save();
    ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/* 
  WinFallingItem: Represents a falling target (heart or star) used in the win screen.
  Now each instance has a random explosionTime between 1s and 10s.
*/
export class WinFallingItem {
  constructor() {
    this.type = Math.random() < 0.5 ? "heart" : "star";
    this.label = this.type === "heart" ? randomHeartLabel() : randomStarLabel();
    this.scoreValue = this.type === "heart" ? 15 : 20;
    this.x = Math.random() * window.innerWidth;
    this.y = -50;
    this.vy = 50 + Math.random() * 30;
    this.alpha = 1;
    // Set explosionTime to a random duration between 1000ms and 10000ms.
    this.explosionTime = Math.random() * 9000 + 1000;
  }
  update(deltaTime) {
    this.y += this.vy * deltaTime / 1000;
    this.explosionTime -= deltaTime;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha; // Can be kept constant or faded if desired.
    if (this.type === "heart") {
      drawHeart(ctx, this.x, this.y, 30, this.label);
    } else {
      drawStar(ctx, this.x, this.y, 30, this.label);
    }
    ctx.restore();
  }
}
