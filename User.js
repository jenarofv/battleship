import { Gameboard } from "./Gameboard.js";

class User {
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
}

export { User };
