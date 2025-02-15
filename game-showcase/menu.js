export function setupMenu(selectAvatarCallback, startGameCallback) {
  const menuOverlay = document.getElementById("menuOverlay");
  menuOverlay.style.display = "flex";
  // Add game title at the top center of the menu screen.
  const titleElem = document.getElementById("gameTitle");
  if (titleElem) {
    titleElem.innerText = "MoJo's Valentine Adventure";
    titleElem.style.fontSize = "48px";
    titleElem.style.textAlign = "center";
    titleElem.style.marginTop = "20px";
  } 
  // Add welcome message below the title.
  const welcomeElem = document.getElementById("welcomeMessage");
  if (welcomeElem) {
    welcomeElem.innerText = "Welcome to the ultimate panda rescue adventure!";
    welcomeElem.style.fontSize = "24px";
    welcomeElem.style.textAlign = "center";
    welcomeElem.style.marginTop = "10px";
  }
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
