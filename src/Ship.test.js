import { test, describe, expect } from "@jest/globals";
import { Ship } from "./Ship.js";

test("ship can only have length between 1 and 9", () => {
  expect(() => new Ship(3.14)).toThrow();
  expect(() => new Ship(-11)).toThrow();
  expect(() => new Ship(11)).toThrow();
});

test("hitting ship of length 1 one sinks it", () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.isSunk()).toStrictEqual(true);
});
