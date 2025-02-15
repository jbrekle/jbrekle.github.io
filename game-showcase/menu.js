export function setupMenu(selectAvatarCallback, startGameCallback) {
  const menuOverlay = document.getElementById("menuOverlay");
  menuOverlay.style.display = "flex";
  document.getElementById("btnMona").addEventListener("click", () => {
    selectAvatarCallback("Mona");
    document.getElementById("btnMona").classList.add("selected");
    document.getElementById("btnJonas").classList.remove("selected");
  });
  document.getElementById("btnJonas").addEventListener("click", () => {
    selectAvatarCallback("Jonas");
    document.getElementById("btnJonas").classList.add("selected");
    document.getElementById("btnMona").classList.remove("selected");
  });
  document.getElementById("startGameBtn").addEventListener("click", startGameCallback);
}
export function showMenu() {
  document.getElementById("menuOverlay").style.display = "flex";
}
export function hideMenu() {
  document.getElementById("menuOverlay").style.display = "none";
}
