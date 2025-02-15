import { setupMenu } from './menu.js';
import { initGame, gameLoop } from './game.js';
import { setupInput } from './input.js';
import { startMenuAnimation } from './animations.js';
import { Player } from './player.js';

window.PlayerClass = Player;
window.selectedAvatar = "Mona";

// Ensure the game canvas fills the window
const canvas = document.getElementById("gameCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function selectAvatar(avatar) {
  window.selectedAvatar = avatar;
}
function startGameHandler() {
  document.getElementById("menuOverlay").style.display = "none";
  const game = initGame(canvas, window.selectedAvatar);
  setupInput(canvas, game.player, game.targets, pauseGame);
  requestAnimationFrame(gameLoop);
}
function pauseGame() {
  document.getElementById("pauseOverlay").style.display = "flex";
}
function resumeGame() {
  document.getElementById("pauseOverlay").style.display = "none";
  if (window.game) {
    window.game.state = "playing";
    requestAnimationFrame(gameLoop);
  }
}
function changeAvatar() {
  document.getElementById("pauseOverlay").style.display = "none";
  document.getElementById("menuOverlay").style.display = "flex";
  if (window.game) window.game.state = "menu";
}
function restartGame() {
  changeAvatar();
}

setupMenu(selectAvatar, startGameHandler);
document.getElementById("resumeBtn").addEventListener("click", resumeGame);
document.getElementById("changeAvatarBtn").addEventListener("click", changeAvatar);
document.getElementById("restartBtn").addEventListener("click", restartGame);

window.selectAvatar = selectAvatar;
window.startGame = startGameHandler;
window.pauseGame = pauseGame;
window.resumeGame = resumeGame;
window.changeAvatar = changeAvatar;
window.restartGame = restartGame;

startMenuAnimation();
