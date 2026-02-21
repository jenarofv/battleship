import "./styles.css";
import { AttackGrid, PlayerGrid } from "./Grid.js";
import { Player } from "./Player.js";
import { addShiptoCell, pvcAttack, computerAttack } from "./dom-functions.js";

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

player1Grid.render(player1);

function turn(e) {
  function foo(e, player1, player2) {
    const result = pvcAttack(e, player1, player2);
    if (result === "game over") {
      let attackCells = document.querySelectorAll(`#attackGrid .cell`);
      for (const cell of attackCells) {
        cell.removeEventListener("click", turn);
      }
      return;
    }
    computerAttack(player1);
    player1Grid.render(player1);
  }
  return foo(e, player1, player2);
}

let attackCells = document.querySelectorAll(`#attackGrid .cell`);

for (const cell of attackCells) {
  cell.addEventListener("click", turn);
}
