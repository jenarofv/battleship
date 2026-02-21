function addShiptoCell(event, player) {
  const cell = event.target;
  const coords = cell.coords.split(",").map((str) => Number(str));
  try {
    player.gameboard.addShip(1, coords);
    cell.classList.add("boat");
  } catch (err) {
    alert(err);
  }
}

function pvcAttack(event, player, oponent) {
  const cell = event.target;
  const coords = cell.coords.split(",");
  try {
    const attackResult = oponent.gameboard.receiveAttack(coords);
    switch (attackResult) {
      case "missed":
        cell.classList.add("missed");
        return "";
      case "ship hit":
        cell.classList.add("hit");
        return "";
      case "ship sunk":
        cell.classList.add("hit");
        alert("Ship was sunk!");
        return "";
      case "fleet sunk":
        cell.classList.add("hit");
        alert("you win");
        return "game over";
    }
  } catch (err) {
    alert(err);
  }
}

function computerAttack(oponent) {
  try {
    const randX = Math.floor(Math.random() * 10);
    const randY = Math.floor(Math.random() * 10);
    oponent.gameboard.receiveAttack([randX, randY]);
  } catch {
    computerAttack(oponent);
  }
}

export { addShiptoCell, pvcAttack, computerAttack };
