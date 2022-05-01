function createGrid(dimension, gridSize) {
  const playArea = document.getElementById('play-area');
  const numTiles = dimension * dimension;
  for (let i = 0; i < numTiles; i++) {
    const tile = document.createElement('div');
    tile.classList.add('grid-tile');
    tile.style.height = `${gridSize / dimension}px`;
    tile.style.width = `${gridSize / dimension}px`;
    tile.addEventListener('mousedown', (e) => {
      e.target.style['background-color'] = "black";
    });
    playArea.appendChild(tile);
  }
}

function clearGrid() {
  const tiles = document.querySelectorAll('.grid-tile');
  tiles.forEach((tile) => {
    tile.remove();
  })
}

const gridDimension = 16;
const gridSize = 500;
const borderSize = 1;
createGrid(gridDimension, gridSize - 2 * borderSize * gridDimension);