import { test, expect } from "@jest/globals";
import { Player } from "./Player.js";

describe("Player tests", () => {
  let player1;
  test("Player can be created", () => {
    expect(() => {
      player1 = new Player("human");
    }).not.toThrow();
  });
  test("player can be defeated", () => {
    player1.gameboard.addShip(1, [2, 3]);
    expect(player1.gameboard.receiveAttack([2, 3])).toBe("fleet sunk");
  });
});
