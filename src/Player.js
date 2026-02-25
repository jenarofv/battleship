import { Gameboard } from "./Gameboard.js";

class Player {
  #type = "human";

  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
  }

  set type(typeArg) {
    if (!["human", "computer"].includes(typeArg)) {
      throw new Error('type should be either "human" or "computer"');
    }
    this.#type = typeArg;
  }

  get type() {
    return this.#type;
  }

  placeRandomShips(numOfShips) {
    if (numOfShips > 9) {
      throw new RangeError("too much ships!");
    }
    let i = 0;
    while (i < numOfShips) {
      const randX = Math.floor(Math.random() * 10);
      const randY = Math.floor(Math.random() * 10);
      const vert = Math.random() > 0.5;
      try {
        console.log(`adding ${numOfShips + 1 - i}-cell ship`);
        this.gameboard.addShip(numOfShips + 1 - i, [randX, randY], vert);
        i++;
      } catch {}
    }
  }
}

export { Player };
