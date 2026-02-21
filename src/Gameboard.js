import { Ship } from "./Ship.js";

class Gameboard {
  usedCells = {};
  missedShots = [];
  receivedAttacks = [];

  static #key(coord) {
    return `${coord[0]},${coord[1]}`;
  }

  constructor() {
    this.ships = [];
  }

  addShip(length, head, vertical = true) {
    let [x, y] = head;
    let shipCoords = [];
    if (Math.max(x, y) + length - 1 > 9) {
      throw new RangeError(
        "Ship outside gameboard, change length or head position",
      );
    }
    if (vertical) {
      for (let i = 0; i < length; i++) {
        shipCoords.push([x, y + i]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        shipCoords.push([x + i, y]);
      }
    }
    if (
      shipCoords.some(
        (coord) => this.usedCells[Gameboard.#key(coord)] !== undefined,
      )
    ) {
      throw new Error("some cell is already used by another ship");
    }
    const ship = new Ship(length);
    this.ships.push(ship);
    for (const coord of shipCoords) {
      this.usedCells[Gameboard.#key(coord)] = ship;
    }
  }

  receiveAttack(coord) {
    const key = Gameboard.#key(coord);
    if (this.receivedAttacks.includes(key)) {
      throw new Error("cell already attacked");
    }
    this.receivedAttacks.push(key);
    const attackedShip = this.usedCells[key];
    if (attackedShip === undefined) {
      this.missedShots.push(key);
      return "missed";
    }
    attackedShip.hit();
    if (this.ships.every((boat) => boat.isSunk())) {
      return "fleet sunk";
    } else if (attackedShip.isSunk()) {
      return "ship sunk";
    } else {
      return "ship hit";
    }
  }
}

export { Gameboard };
