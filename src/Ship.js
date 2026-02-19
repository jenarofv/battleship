class Ship {
  #length;
  #hits;
  #sunk;

  constructor(length) {
    this.length = length;
    this.#hits = 0;
    this.#sunk = false;
  }

  set length(n) {
    if (n < 1 || !Number.isInteger(n) || n > 10) {
      throw new Error("length should be an integer between 1 and 9");
    }
    this.#length = n;
  }

  get length() {
    return this.#length;
  }

  isSunk() {
    return this.#sunk;
  }

  hit() {
    if (this.#hits >= this.#length) {
      return;
    }
    if (++this.#hits === this.#length) {
      this.#sunk = true;
    }
  }
}

export { Ship };
