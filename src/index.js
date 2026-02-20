import "./styles.css";
import { Grid } from "./Grid.js";

const body = document.querySelector("body");
const title = document.createElement("h1");
title.innerHTML = "Battleship";
title.style.textTransform = "uppercase";
body.appendChild(title);

const playerGrid = new Grid("grid1");
console.log(playerGrid);
