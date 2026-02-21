class Grid {
  constructor(name, title = "") {
    this.name = name;
    const body = document.querySelector("body");
    if (document.getElementById(`#${name}`)) {
      throw new Error(`element with ID #${name} already exists`);
    }
    const gridContainer = document.createElement("div");
    gridContainer.id = `${name}`;
    gridContainer.classList.add("gameboard-container");
    const grid = document.createElement("div");
    if (title !== "") {
      const titleElement = document.createElement("h2");
      titleElement.textContent = title;
      titleElement.classList.add("gameboard-title");
      gridContainer.appendChild(titleElement);
    }
    body.appendChild(gridContainer);
    gridContainer.appendChild(grid);
    grid.classList.add("gameboard");
    for (let i = 0; i < 10; i++) {
      const letterDiv = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = `${10 - i}`;
      letterDiv.style.textAlign = "center";
      p.style.verticalAlign = "middle";
      letterDiv.appendChild(p);
      grid.appendChild(letterDiv);
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.coords = `${j},${9 - i}`;
        grid.appendChild(cell);
      }
    }
    const xLabelsContainer = document.createElement("div");
    xLabelsContainer.classList.add("x-labels");
    const phoneticAlphabet = [
      "",
      "Alpha",
      "Bravo",
      "Charlie",
      "Delta",
      "Echo",
      "Foxtrot",
      "Golf",
      "Hotel",
      "India",
      "Juliet",
    ];
    for (const letter of phoneticAlphabet) {
      const letterDiv = document.createElement("div");
      letterDiv.textContent = letter;
      xLabelsContainer.appendChild(letterDiv);
    }
    gridContainer.appendChild(xLabelsContainer);
  }

  render(player) {
    const shipCells = player.gameboard.usedCells;
    const missedShots = player.gameboard.missedShots;
    const attackedCells = player.gameboard.receivedAttacks;
    const cells = document.querySelectorAll(`#${this.name} .cell`);
    for (const cell of cells) {
      cell.textContent = "";
      cell.className = "cell";
      if (shipCells[cell.coords] !== undefined) {
        cell.classList.add("boat");
      }
      if (attackedCells.includes(cell.coords)) {
        cell.textContent = "✘";
      }
    }
  }
}

class PlayerGrid extends Grid {
  constructor(name) {
    super(name, "Player Grid");
  }
}
class AttackGrid extends Grid {
  constructor(name) {
    super(name, "Attack Grid");
  }
}

export { Grid, PlayerGrid, AttackGrid };
