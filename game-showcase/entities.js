import { randomHeartLabel, randomStarLabel, getScaleForY } from './util.js';
import { levels } from './levels.js';

// Detailed drawing for Heart
export function drawHeart(ctx, x, y, size, label) {
  ctx.save();
  ctx.translate(x, y);
  // Draw heart outline with two lobes
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
  
  // Inner highlight
  ctx.beginPath();
  ctx.moveTo(0, size * 0.45);
  ctx.bezierCurveTo(-size * 0.3, size * 0.3, -size * 0.2, size * 0.8, 0, size * 0.9);
  ctx.bezierCurveTo(size * 0.2, size * 0.8, size * 0.3, size * 0.3, 0, size * 0.45);
  ctx.closePath();
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.fill();
  
  // Label in the heart
  ctx.fillStyle = "#fff";
  ctx.font = `${size * 0.4}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, size * 0.65);
  ctx.restore();
}

// Detailed drawing for Star
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
  // Inner circle detail
  ctx.beginPath();
  ctx.arc(0, 0, innerRadius * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  // Label in the center
  ctx.fillStyle = "#000";
  ctx.font = `${size * 0.3}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, 0);
  ctx.restore();
}

// Detailed drawing for Panda
export function drawPanda(ctx, x, y, size, time, gender = "male") {
  ctx.save();
  ctx.translate(x, y);
  // Body
  ctx.beginPath();
  ctx.ellipse(0, size * 0.3, size, size * 0.8, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();
  // Head
  ctx.beginPath();
  ctx.arc(0, -size * 0.2, size * 0.6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Ears
  const earOffsetX = size * 0.4;
  const earOffsetY = -size * 0.5;
  const earRadius = size * 0.2;
  // Left ear
  ctx.beginPath();
  ctx.arc(-earOffsetX, earOffsetY, earRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-earOffsetX, earOffsetY, earRadius * 0.6, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  // Right ear
  ctx.beginPath();
  ctx.arc(earOffsetX, earOffsetY, earRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(earOffsetX, earOffsetY, earRadius * 0.6, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  // Eyes with shine
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
  // Nose and mouth
  ctx.beginPath();
  ctx.arc(0, -size * 0.05, size * 0.1, 0, Math.PI, false);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-size * 0.1, 0);
  ctx.quadraticCurveTo(0, size * 0.1, size * 0.1, 0);
  ctx.stroke();
  // Gender adornment (bow for female)
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
  // Limbs with animated offset
  const limbOffset = Math.sin(time / 200) * size * 0.1;
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

// Detailed drawing for Rocket (with parts: tip, body, fins, exhaust fire)
export function drawRocket(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  // Rocket Body
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
  
  // Rocket Tip
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.8);
  ctx.lineTo(size * 0.15, -size * 0.6);
  ctx.lineTo(-size * 0.15, -size * 0.6);
  ctx.closePath();
  ctx.fillStyle = "#ff4444";
  ctx.fill();
  ctx.stroke();
  
  // Left Fin
  ctx.beginPath();
  ctx.moveTo(-size * 0.3, size * 0.4);
  ctx.lineTo(-size * 0.45, size * 0.2);
  ctx.lineTo(-size * 0.3, size * 0.2);
  ctx.closePath();
  ctx.fillStyle = "#ffcc00";
  ctx.fill();
  ctx.stroke();
  
  // Right Fin
  ctx.beginPath();
  ctx.moveTo(size * 0.3, size * 0.4);
  ctx.lineTo(size * 0.45, size * 0.2);
  ctx.lineTo(size * 0.3, size * 0.2);
  ctx.closePath();
  ctx.fillStyle = "#ffcc00";
  ctx.fill();
  ctx.stroke();
  
  // Exhaust Fire
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
      this.state = "free";
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
  }
  draw(ctx, scaleFunc) {
    ctx.save();
    const scale = scaleFunc(this.y);
    ctx.translate(this.x, this.y);
    ctx.scale(scale, scale);
    if (this.type === "heart") {
      const extra = this.hit ? this.effectTime / 500 : 0;
      ctx.globalAlpha = this.hit ? Math.max(1 - this.effectTime / 500, 0) : 1;
      drawHeart(ctx, 0, 0, this.size/2 + extra, this.label);
    } else if (this.type === "star") {
      const extra = this.hit ? this.effectTime / 300 : 0;
      ctx.globalAlpha = this.hit ? Math.max(1 - this.effectTime / 300, 0) : 1;
      drawStar(ctx, 0, 0, this.size/2 + extra, this.label);
    } else if (this.type === "panda") {
      if (this.state === "free" || this.state === "beingCollected") {
        drawPanda(ctx, 0, 0, this.size/2, this.animationTime, this.gender);
      }
    }
    ctx.restore();
  }
}

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
        ctx.fillStyle = "#777";
        ctx.fillRect(-20, -40, 40, 80);
        ctx.fillStyle = "#fff";
        for (let i = -30; i < 30; i += 10) {
          ctx.fillRect(i, -30, 5, 10);
        }
      } else if (this.type === "lamp") {
        ctx.strokeStyle = "#ffcc00";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 20);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI*2);
        ctx.stroke();
      }
    } else if (this.levelName === "Forest") {
      if (this.type === "tree") {
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(-5, 0, 10, 30);
        ctx.fillStyle = "#228B22";
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI*2);
        ctx.fill();
      } else if (this.type === "bush") {
        ctx.fillStyle = "#2E8B57";
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI*2);
        ctx.fill();
      }
    } else if (this.levelName === "Space") {
      if (this.type === "satellite") {
        ctx.fillStyle = "#ccc";
        ctx.fillRect(-10, -10, 20, 20);
        ctx.strokeStyle = "#999";
        ctx.beginPath();
        ctx.moveTo(-15, -15);
        ctx.lineTo(15, 15);
        ctx.stroke();
      } else if (this.type === "comet") {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = "#ffcc00";
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(20,20);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
}

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
  // Now accepts levelName as a parameter.
  draw(ctx, levelName) {
    ctx.save();
    const scale = getScaleForY(this.y, window.innerHeight);
    ctx.translate(this.x, this.y);
    ctx.scale(scale, scale);
    if (levelName === "City") {
      if (this.type === "car") {
        // Detailed car: body, windows, wheels
        ctx.beginPath();
        ctx.moveTo(-30, -10);
        ctx.lineTo(30, -10);
        ctx.lineTo(25, 10);
        ctx.lineTo(-25, 10);
        ctx.closePath();
        let grad = ctx.createLinearGradient(-30, -10, 30, 10);
        grad.addColorStop(0, "#333");
        grad.addColorStop(1, "#777");
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.fillStyle = "#aaf";
        ctx.fillRect(-20, -5, 40, 8);
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(-20, 15, 8, 0, Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(20, 15, 8, 0, Math.PI*2);
        ctx.fill();
      } else if (this.type === "person") {
        ctx.fillStyle = "#ffe0bd";
        ctx.beginPath();
        ctx.arc(0, -20, 12, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = "#ff6699";
        ctx.fillRect(-10, -8, 20, 30);
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(-10, 22);
        ctx.lineTo(-20, 40);
        ctx.moveTo(10, 22);
        ctx.lineTo(20, 40);
        ctx.stroke();
      } else if (this.type === "bike") {
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(-15, 10, 10, 0, Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(15, 10, 10, 0, Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-15, 10);
        ctx.lineTo(0, -5);
        ctx.lineTo(15, 10);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, -5);
        ctx.lineTo(0, 10);
        ctx.stroke();
      }
    } else if (levelName === "Forest") {
      if (this.type === "stone") {
        ctx.beginPath();
        ctx.ellipse(0, 0, 25, 15, 0, 0, Math.PI*2);
        ctx.fillStyle = "#888";
        ctx.fill();
        ctx.strokeStyle = "#555";
        ctx.stroke();
      } else if (this.type === "mouse") {
        ctx.beginPath();
        ctx.ellipse(0, 0, 20, 10, 0, 0, Math.PI*2);
        ctx.fillStyle = "#aaa";
        ctx.fill();
        ctx.fillStyle = "#888";
        ctx.beginPath();
        ctx.arc(-15, -10, 5, 0, Math.PI*2);
        ctx.arc(15, -10, 5, 0, Math.PI*2);
        ctx.fill();
      } else if (this.type === "mushroom") {
        ctx.beginPath();
        ctx.arc(0, 0, 15, Math.PI, 0);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.fillStyle = "#ff6699";
        ctx.fillRect(-10, 0, 20, 15);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(-10, 0, 20, 15);
      }
    } else if (levelName === "Space") {
      if (this.type === "planet") {
        let grad = ctx.createRadialGradient(0, 0, 10, 0, 0, 30);
        grad.addColorStop(0, "#66ccff");
        grad.addColorStop(1, "#003366");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0, Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = "#000";
        ctx.stroke();
      } else if (this.type === "alien") {
        ctx.beginPath();
        ctx.arc(0, 0, 25, 0, Math.PI*2);
        ctx.fillStyle = "#0f0";
        ctx.fill();
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(-10, -5, 3, 0, Math.PI*2);
        ctx.arc(10, -5, 3, 0, Math.PI*2);
        ctx.fill();
      } else if (this.type === "rocket") {
        drawRocket(ctx, 0, 0, 40);
      }
    }
    ctx.restore();
  }
}

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
      ctx.arc(this.x, this.y, 3, 0, Math.PI*2);
      ctx.fill();
    }
  }
}

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
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
  }
}

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
    const wing = Math.sin(this.wingTime/200) * 5;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - 10, this.y - wing);
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 10, this.y - wing);
    ctx.stroke();
    ctx.restore();
  }
}

export class SpaceStar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = Math.random();
  }
  update(deltaTime) {
    this.alpha += (Math.random()-0.5)*0.01;
    this.alpha = Math.max(0.3, Math.min(1, this.alpha));
  }
  draw(ctx) {
    ctx.save();
    ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
  }
}

export class WinFallingItem {
  constructor() {
    this.type = Math.random() < 0.5 ? "heart" : "star";
    this.label = this.type === "heart" ? randomHeartLabel() : randomStarLabel();
    this.scoreValue = this.type === "heart" ? 15 : 20;
    this.x = Math.random() * window.innerWidth;
    this.y = -50;
    this.vy = 50 + Math.random() * 30;
    this.alpha = 1;
  }
  update(deltaTime) {
    this.y += this.vy * deltaTime / 1000;
    this.alpha -= deltaTime / 30000;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    if (this.type === "heart") {
      drawHeart(ctx, this.x, this.y, 30, this.label);
    } else {
      drawStar(ctx, this.x, this.y, 30, this.label);
    }
    ctx.restore();
  }
}

