// player.js – Improved Player class with responsive sizing and more detailed, 3D-ish drawing

import { clamp } from './util.js';
import { drawPanda } from './entities.js';

export class Player {
  constructor(avatar) {
    this.avatar = avatar; // "Mona" or "Jonas"
    // Set initial default sizes; will be recalculated in update()
    this.width = 100;
    this.height = 160;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight - 10;
    this.speed = 400;
    this.walkTime = 0;
    this.shakeOffset = { x: 0, y: 0 };
    this.backpack = {
      x: this.x - 0.3 * this.width,
      y: this.y - 0.65 * this.height,
      width: 0.6 * this.width,
      height: 0.4 * this.height,
    };
    this.backpackJiggleTime = 0;
  }
  update(deltaTime) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    // Determine a base size based on the smaller screen dimension with a minimum of 100px.
    const baseSize = Math.max(100, Math.min(screenWidth, screenHeight) * 0.1);
    this.width = baseSize;
    this.height = baseSize * 1.6;
    this.y = screenHeight - 10;
    this.x = clamp(this.x, this.width / 2, screenWidth - this.width / 2);
    this.walkTime += deltaTime;
    // Calculate backpack dimensions once
    const bpX = this.x - 0.3 * this.width;
    const bpY = this.y - 0.65 * this.height;
    const bpW = 0.6 * this.width;
    const bpH = 0.4 * this.height;
    this.backpack.x = bpX;
    this.backpack.y = bpY;
    this.backpack.width = bpW;
    this.backpack.height = bpH;
    // Apply shake effect on collision
    if (window.playerShakeTime > 0) {
      window.playerShakeTime -= deltaTime;
      this.shakeOffset.x = (Math.random() - 0.5) * 10;
      this.shakeOffset.y = (Math.random() - 0.5) * 10;
    } else {
      this.shakeOffset.x = 0;
      this.shakeOffset.y = 0;
    }
    if (this.backpackJiggleTime > 0) {
      this.backpackJiggleTime -= deltaTime;
    }
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.shakeOffset.x, this.shakeOffset.y);
    
    // Draw a rounded, 3D-ish body using an ellipse and gradient.
    const bodyCenterX = this.x;
    const bodyCenterY = this.y - this.height / 2;
    const bodyRadiusX = this.width / 2;
    const bodyRadiusY = this.height / 2;
    const bodyGrad = ctx.createRadialGradient(bodyCenterX, bodyCenterY, bodyRadiusX * 0.5, bodyCenterX, bodyCenterY, bodyRadiusX);
    bodyGrad.addColorStop(0, this.avatar === "Mona" ? "#ffccd5" : "#ffe0b3");
    bodyGrad.addColorStop(1, this.avatar === "Mona" ? "#ff9999" : "#ffcc99");
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.ellipse(bodyCenterX, bodyCenterY, bodyRadiusX, bodyRadiusY, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ff6699";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw arms with smooth curves
    const armLength = this.width * 0.5;
    const armOffset = Math.sin(this.walkTime / 150) * 8;
    ctx.strokeStyle = "#ffe0bd";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(this.x - bodyRadiusX, bodyCenterY);
    ctx.quadraticCurveTo(this.x - bodyRadiusX - armLength * 0.3, bodyCenterY + armOffset, this.x - bodyRadiusX - armLength, bodyCenterY + armLength * 0.2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(this.x + bodyRadiusX, bodyCenterY);
    ctx.quadraticCurveTo(this.x + bodyRadiusX + armLength * 0.3, bodyCenterY - armOffset, this.x + bodyRadiusX + armLength, bodyCenterY + armLength * 0.2);
    ctx.stroke();
    
    // Draw legs as rounded rectangles
    const legWidth = this.width * 0.15;
    const legHeight = this.height * 0.3;
    ctx.fillStyle = "#000";
    // Left leg
    ctx.beginPath();
    ctx.moveTo(this.x - legWidth - 5, this.y - legHeight);
    ctx.lineTo(this.x - legWidth - 5, this.y);
    ctx.lineTo(this.x - 5, this.y);
    ctx.lineTo(this.x - 5, this.y - legHeight);
    ctx.closePath();
    ctx.fill();
    // Right leg
    ctx.beginPath();
    ctx.moveTo(this.x + 5, this.y - legHeight);
    ctx.lineTo(this.x + 5, this.y);
    ctx.lineTo(this.x + legWidth + 5, this.y);
    ctx.lineTo(this.x + legWidth + 5, this.y - legHeight);
    ctx.closePath();
    ctx.fill();
    
    // Draw head with 3D gradient and round shape
    const headX = this.x;
    const headY = this.y - this.height - bodyRadiusX * 0.5;
    const headRadius = bodyRadiusX * 1.2;
    const headGrad = ctx.createRadialGradient(headX, headY, headRadius * 0.4, headX, headY, headRadius);
    headGrad.addColorStop(0, "#ffe0bd");
    headGrad.addColorStop(1, "#ffcc99");
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.arc(headX, headY, headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.stroke();
    
    // Eyes with glossy effect
    const eyeOffsetX = headRadius * 0.3;
    const eyeOffsetY = -headRadius * 0.1;
    const eyeRadius = headRadius * 0.2;
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(headX - eyeOffsetX, headY + eyeOffsetY, eyeRadius, 0, Math.PI * 2);
    ctx.arc(headX + eyeOffsetX, headY + eyeOffsetY, eyeRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(headX - eyeOffsetX - 2, headY + eyeOffsetY - 2, eyeRadius * 0.5, 0, Math.PI * 2);
    ctx.arc(headX + eyeOffsetX - 2, headY + eyeOffsetY - 2, eyeRadius * 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Nose and mouth using smooth curves
    ctx.beginPath();
    ctx.moveTo(headX - headRadius * 0.1, headY + headRadius * 0.1);
    ctx.quadraticCurveTo(headX, headY + headRadius * 0.2, headX + headRadius * 0.1, headY + headRadius * 0.1);
    ctx.stroke();
    
    // Hair on top – different style based on avatar
    ctx.save();
    if (this.avatar === "Mona") {
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(headX - headRadius, headY - headRadius * 0.2);
      ctx.quadraticCurveTo(headX, headY - headRadius * 1.1, headX + headRadius, headY - headRadius * 0.2);
      ctx.stroke();
    } else {
      ctx.fillStyle = "#8B4513";
      ctx.beginPath();
      ctx.arc(headX, headY - headRadius * 0.6, headRadius * 0.8, Math.PI, 0);
      ctx.fill();
    }
    ctx.restore();
    
    // Backpack on top; apply jiggle effect
    ctx.save();
    let bpOffset = 0;
    if (this.backpackJiggleTime > 0) {
      bpOffset = (Math.random() - 0.5) * 8;
    }
    ctx.translate(bpOffset, 0);
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(this.backpack.x, this.backpack.y, this.backpack.width, this.backpack.height);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(this.backpack.x, this.backpack.y, this.backpack.width, this.backpack.height);
    ctx.beginPath();
    ctx.moveTo(this.backpack.x, this.backpack.y + 5);
    ctx.lineTo(this.x - this.width / 2, this.y - this.height + 10);
    ctx.moveTo(this.backpack.x + this.backpack.width, this.backpack.y + 5);
    ctx.lineTo(this.x + this.width / 2, this.y - this.height + 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(this.backpack.x + this.backpack.width / 2, this.backpack.y, this.backpack.width * 0.4, this.backpack.height * 0.3, 0, 0, Math.PI * 2);
    ctx.strokeStyle = "#fff";
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  }
}
