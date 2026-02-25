import "./styles.css";

import { GameSelector } from "./Game.js";

const body = document.querySelector("body");
const title = document.createElement("h1");
title.innerHTML = "Battleship";
title.style.textTransform = "uppercase";
body.appendChild(title);

new GameSelector();
