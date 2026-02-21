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

function attackCell(event, oponent) {
  const cell = event.target;
  const coords = cell.coords.split(",");
  try {
    const attackResult = oponent.gameboard.receiveAttack(coords);
    switch (attackResult) {
      case "missed":
        cell.classList.add("missed");
        break;
      case "ship hit":
        cell.classList.add("hit");
        break;
      case "ship sunk":
        cell.classList.add("hit");
        alert("Ship was sunk!");
        break;
      case "fleet sunk":
        cell.classList.add("hit");
        alert("you win");
        break;
    }
  } catch (err) {
    alert(err);
  }
}

export { addShiptoCell, attackCell };
