import { test, expect } from "@jest/globals";
import { User } from "./User.js";

describe("User tests", () => {
  let player1;
  test("user can be created", () => {
    expect(() => {
      player1 = new User("human");
    }).not.toThrow();
  });
  test("player can be defeated", () => {
    player1.gameboard.addShip(1, [2, 3]);
    expect(player1.gameboard.receiveAttack([2, 3])).toBe("fleet sunk");
  });
});
