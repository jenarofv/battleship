import "./styles.css";
import { Grid, AttackGrid, PlayerGrid } from "./Grid.js";
import { Player } from "./Player.js";
import { addShiptoCell, attackCell } from "./dom-functions.js";

const body = document.querySelector("body");
const title = document.createElement("h1");
title.innerHTML = "Battleship";
title.style.textTransform = "uppercase";
body.appendChild(title);

const player1 = new Player("human");
const player2 = new Player("computer");
const attackGrid = new AttackGrid("attackGrid");
const player1Grid = new PlayerGrid("grid1");

player1.placeRandomShips(6);
player2.placeRandomShips(6);

let playerCells = document.querySelectorAll(`#grid1 .cell`);
for (const cell of playerCells) {
  cell.addEventListener("click", (e) => addShiptoCell(e, player1));
}

let attackCells = document.querySelectorAll(`#attackGrid .cell`);
for (const cell of attackCells) {
  cell.addEventListener("click", (e) => attackCell(e, player2));
}
