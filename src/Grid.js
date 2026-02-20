class Grid {
  constructor(name) {
    const body = document.querySelector("body");
    if (document.getElementById(`#${name}`)) {
      throw new Error(`element with ID #${name} already exists`);
    }
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("gameboard-container");
    const grid = document.createElement("div");
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
      "Hotel",
      "Kilo",
      "Lima",
      "Golf",
    ];
    for (const letter of phoneticAlphabet) {
      const letterDiv = document.createElement("div");
      letterDiv.textContent = letter;
      xLabelsContainer.appendChild(letterDiv);
    }
    gridContainer.appendChild(xLabelsContainer);
    return grid;
  }
}

export { Grid };
