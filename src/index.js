import "./styles.css";

import { GameSelector } from "./Game.js";

const body = document.querySelector("body");
const title = document.createElement("h1");
const reloadBtn = document.createElement("button");
const main = document.createElement("main");
title.innerHTML = "Battleship";
title.style.textTransform = "uppercase";
reloadBtn.textContent = "reset ⟳";
reloadBtn.style.position = "absolute";
reloadBtn.style.marginLeft = "45%";
reloadBtn.style.marginRight = "40%";
reloadBtn.addEventListener("click", () => {
  window.location.reload();
});
body.appendChild(title);
body.appendChild(reloadBtn);
body.appendChild(main);

new GameSelector();
