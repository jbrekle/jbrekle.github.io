import { clamp } from './util.js';

let isDraggingPlayer = false;
let dragOffsetX = 0;
let draggingPanda = null;
let onShootProjectile = null;

/* 
  setOnShootProjectile: registers a callback to be executed when a projectile is to be shot.
*/
export function setOnShootProjectile(callback) {
  onShootProjectile = callback;
}

/* 
  setupInput: Initializes pointer/touch event listeners on the canvas.
  NOTE: Instead of using the stale 'targets' passed at initialization,
  we now reference window.game.targets to always have the current target list.
*/
export function setupInput(canvas, player, targets, pauseCallback) {
  function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    let x, y;
    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    return { x, y };
  }
  
  function pointerDown(e) {
    const pos = getPointerPos(e);
    // Check if the pause/menu button was pressed.
    if (pos.x >= 20 && pos.x <= 100 && pos.y >= 20 && pos.y <= 50) {
      pauseCallback();
      return;
    }
    if (draggingPanda) return;
    // Check if the player is being dragged.
    if (pos.x > player.x - player.width && pos.x < player.x + player.width &&
        pos.y > player.y - player.height - 50 && pos.y < player.y) {
      isDraggingPlayer = true;
      dragOffsetX = pos.x - player.x;
      e.preventDefault();
      return;
    }
    // Use the current targets from window.game.targets instead of the stale parameter.
    for (let target of window.game.targets) {
      if (target.type === "panda" && target.state === "free") {
        const dx = pos.x - target.x;
        const dy = pos.y - target.y;
        if (Math.sqrt(dx * dx + dy * dy) < target.size / 2) {
          draggingPanda = target;
          e.preventDefault();
          return;
        }
      }
    }
    shootProjectile(pos);
  }
  
  function pointerMove(e) {
    const pos = getPointerPos(e);
    if (isDraggingPlayer) {
      player.x = pos.x - dragOffsetX;
      player.x = clamp(player.x, player.width / 2, canvas.width - player.width / 2);
    }
    if (draggingPanda) {
      draggingPanda.x = pos.x;
      draggingPanda.y = pos.y;
    }
  }
  
  function pointerUp(e) {
    isDraggingPlayer = false;
    draggingPanda = null;
  }
  
  function shootProjectile(pos) {
    const dx = pos.x - player.x;
    const dy = pos.y - (player.y - player.height / 2);
    const mag = Math.sqrt(dx * dx + dy * dy);
    const speed = 500;
    const vx = (dx / mag) * speed;
    const vy = (dy / mag) * speed;
    if (onShootProjectile) {
      onShootProjectile(player.x, player.y - player.height / 2, vx, vy);
    }
  }
  
  canvas.addEventListener("mousedown", pointerDown);
  canvas.addEventListener("touchstart", pointerDown);
  canvas.addEventListener("mousemove", pointerMove);
  canvas.addEventListener("touchmove", pointerMove);
  canvas.addEventListener("mouseup", pointerUp);
  canvas.addEventListener("touchend", pointerUp);
}
