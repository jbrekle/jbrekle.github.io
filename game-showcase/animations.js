import { drawPanda } from './entities.js';
import { Player } from './player.js';

let menuAnimTime = 0;
export function startMenuAnimation() {
  requestAnimationFrame(menuAnimationLoop);
}
function updateMenuAnimation(dt) {
  menuAnimTime += dt;
}
function drawMenuAnimation(ctx, canvas, selectedAvatar) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the player in the middle
  const tempPlayer = new Player(selectedAvatar || "Mona");
  tempPlayer.x = canvas.width / 2;
  tempPlayer.y = canvas.height / 2;
  tempPlayer.walkTime = menuAnimTime;
  tempPlayer.update(0);
  tempPlayer.draw(ctx);
  // Draw a walking panda on the left (at 25% width) and right (75% width)
  ctx.save();
  ctx.translate(canvas.width * 0.25, canvas.height / 2);
  drawPanda(ctx, 0, 0, 40, menuAnimTime, "female");
  ctx.restore();
  ctx.save();
  ctx.translate(canvas.width * 0.75, canvas.height / 2);
  drawPanda(ctx, 0, 0, 40, menuAnimTime, "male");
  ctx.restore();
}
function menuAnimationLoop(timestamp) {
  const dt = timestamp - (menuAnimTime || timestamp);
  updateMenuAnimation(dt);
  const canvas = document.getElementById("menuAnim");
  const ctx = canvas.getContext("2d");
  drawMenuAnimation(ctx, canvas, window.selectedAvatar || "Mona");
  requestAnimationFrame(menuAnimationLoop);
}
export function startWinAnimation(winDancingPandas, winFallingTargets) {
  let globalLastWinTime = 0;
  function winAnimLoop(timestamp) {
    if (!globalLastWinTime) globalLastWinTime = timestamp;
    const dt = timestamp - globalLastWinTime;
    globalLastWinTime = timestamp;
    winDancingPandas.forEach(panda => {
      panda.x += panda.dx;
      panda.y += panda.dy;
      if (panda.x < 0 || panda.x > window.innerWidth) panda.dx *= -1;
      if (panda.y < 0 || panda.y > window.innerHeight) panda.dy *= -1;
      panda.time += dt;
    });
    winFallingTargets.forEach(item => item.update(dt));
    const winAnimCanvas = document.getElementById("winAnim");
    const ctx = winAnimCanvas.getContext("2d");
    ctx.clearRect(0, 0, winAnimCanvas.width, winAnimCanvas.height);
    winFallingTargets.forEach(item => item.draw(ctx));
    winDancingPandas.forEach(panda => {
      drawPanda(ctx, panda.x, panda.y, 40, panda.time, panda.gender);
    });
    if (winFallingTargets.some(item => item.alpha > 0)) {
      requestAnimationFrame(winAnimLoop);
    }
  }
  requestAnimationFrame(winAnimLoop);
}
