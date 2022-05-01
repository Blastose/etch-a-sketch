function createGrid(dimension, gridSize) {
  const playArea = document.getElementById('play-area');
  const numTiles = dimension * dimension;
  for (let i = 0; i < numTiles; i++) {
    const tile = document.createElement('div');
    tile.classList.add('grid-tile');
    tile.style.height = `${gridSize / dimension}px`;
    tile.style.width = `${gridSize / dimension}px`;
    playArea.appendChild(tile);
  }
}

const gridDimension = 2;
const gridSize = 500;
const borderSize = 1;
createGrid(gridDimension, gridSize - 2 * borderSize * gridDimension);