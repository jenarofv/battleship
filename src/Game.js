import { Player } from "./Player.js";
import { addShiptoCell, pvcAttack, computerAttack } from "./dom-functions.js";
import { AttackGrid, PlayerGrid } from "./Grid.js";

class PvC {
  constructor() {
    const player1 = new Player("human");
    const player2 = new Player("computer");
    const attackGrid = new AttackGrid("attackGrid");
    const player1Grid = new PlayerGrid("grid1");

    player1.placeRandomShips(6);
    player2.placeRandomShips(6);

    player1Grid.render(player1);

    function turn(e) {
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

    let attackCells = document.querySelectorAll(`#attackGrid .cell`);

    for (const cell of attackCells) {
      cell.addEventListener("click", turn);
    }
  }
}

class PvP {
  constructor() {
    let counter = 0;
    const player1 = new Player("human");
    const player2 = new Player("human");
    const attackGrid = new AttackGrid("attackGrid");
    const playerGrid = new PlayerGrid("grid1");

    player1.placeRandomShips(6);
    player2.placeRandomShips(6);

    attackGrid.render(player2);
    playerGrid.render(player1);

    function turnEven(e) {
      const result = pvcAttack(e, player1, player2);
      if (result === "game over") {
        let attackCells = document.querySelectorAll(`#attackGrid .cell`);
        for (const cell of attackCells) {
          cell.removeEventListener("click", turn);
        }
        return;
      }
      const prevCounter = counter++;
      for (const cell of attackCells) {
        cell.removeEventListener("click", turn(prevCounter));
        cell.addEventListener("click", turn(counter));
      }
      setTimeout(() => {
        attackGrid.render(player1);
        playerGrid.render(player2);
      }, 1500);
    }

    function turnOdd(e) {
      const result = pvcAttack(e, player2, player1);
      if (result === "game over") {
        let attackCells = document.querySelectorAll(`#attackGrid .cell`);
        for (const cell of attackCells) {
          cell.removeEventListener("click", turn);
        }
        return;
      }
      const prevCounter = counter++;
      for (const cell of attackCells) {
        cell.removeEventListener("click", turn(prevCounter));
        cell.addEventListener("click", turn(counter));
      }
      setTimeout(() => {
        attackGrid.render(player2);
        playerGrid.render(player1);
      }, 1500);
    }

    let attackCells = document.querySelectorAll(`#attackGrid .cell`);

    function turn(i) {
      return i % 2 === 0 ? turnOdd : turnEven;
    }

    for (const cell of attackCells) {
      cell.addEventListener("click", turn(counter));
    }
  }
}

export { PvC, PvP };
