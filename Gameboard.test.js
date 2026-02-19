import { Gameboard } from "./Gameboard.js";
import { describe, test, expect } from "@jest/globals";

describe("adding ships works fine", () => {
  const gameboard = new Gameboard();
  test("can add a single ship", () => {
    expect(() => gameboard.addShip(3, [0, 0], true)).not.toThrow();
  });
  test("can't add ship twice", () => {
    expect(() => gameboard.addShip(3, [0, 0], true)).toThrow();
  });
  test("can't add ship that uses an occupied cell", () => {
    expect(() => gameboard.addShip(3, [0, 2], false)).toThrow();
  });
  test("can't add huge ship ", () => {
    expect(() => gameboard.addShip(10, [1, 1], false)).toThrow();
  });
  test("can't add small ship outside of range", () => {
    expect(() => gameboard.addShip(6, [5, 5], false)).toThrow();
  });
});

describe("attacking works fine", () => {
  const gameboard = new Gameboard();
  gameboard.addShip(3, [0, 0], true);
  test("attacking does not crash when receiving unattacked value inside range", () => {
    expect(() => gameboard.receiveAttack([0, 0])).not.toThrow();
    expect(() => gameboard.receiveAttack([1, 0])).not.toThrow();
    expect(() => gameboard.receiveAttack([1, 5])).not.toThrow();
  });
  test("attacking crashes when attacking same cell twice", () => {
    expect(() => gameboard.receiveAttack([0, 0])).toThrow();
    expect(() => gameboard.receiveAttack([1, 0])).toThrow();
    expect(() => gameboard.receiveAttack([1, 5])).toThrow();
  });
  test("attacking returns value based on cell contents", () => {
    gameboard.addShip(1, [5, 5]);
    expect(gameboard.receiveAttack([0, 1])).toBe("ship hit");
    expect(gameboard.receiveAttack([0, 2])).toBe("ship sunk");
    expect(gameboard.receiveAttack([5, 5])).toBe("fleet sunk");
  });
});
