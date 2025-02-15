// util.js – General utility functions

export function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
  
  export function getScaleForY(y, canvasHeight) {
    const base = 0.5;
    const factor = 1 + (y / canvasHeight);
    return base * factor;
  }
  
  export function randomHeartLabel() {
    const words = ["Love", "Care", "Trust", "Passion", "Admire", "Cherish", "Devotion", "Adore", "Fondness", "Embrace"];
    return words[Math.floor(Math.random() * words.length)];
  }
  
  export function randomStarLabel() {
    const words = ["Dream", "Achieve", "Inspire", "Shine", "Grow", "Believe", "Aspire", "Soar", "Flourish", "Radiate"];
    return words[Math.floor(Math.random() * words.length)];
  }
  
  export function addLogMessage(text, logMessages) {
    logMessages.push({ text, time: 0, lifetime: 2000 });
  }
  
  export function addPointAnimation(text, x, y, pointAnimations) {
    pointAnimations.push({ text, x, y, time: 0, lifetime: 1000 });
  }
  
  export function drawRoundedRect(ctx, x, y, width, height, radius) {
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
  