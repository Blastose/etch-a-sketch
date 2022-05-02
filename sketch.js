function createCanvas(dimension, gridSize) {
  const playArea = document.getElementById('play-area');
  const numTiles = dimension * dimension;
  for (let i = 0; i < numTiles; i++) {
    const tile = document.createElement('div');
    tile.classList.add('grid-tile');
    console.log(gridSize / dimension);
    tile.style.height = `${gridSize / dimension}px`;
    tile.style.width = `${gridSize / dimension}px`;
    tile.addEventListener('mouseover', (e) => {
      e.target.style['background-color'] = tileColor;
    });
    playArea.appendChild(tile);
  }
}

function clearCanvas() {
  const tiles = document.querySelectorAll('.grid-tile');
  tiles.forEach((tile) => {
    tile.style['background-color'] = "";
  })
}

function updateColorFromColorPicker(e) {
  tileColor = e.target.value;
}

const gridDimension = 24;
const gridSize = 499;
createCanvas(gridDimension, gridSize);
const colorPicker = document.getElementById('color-pick-main');
colorPicker.addEventListener('change', updateColorFromColorPicker);
let tileColor = colorPicker.value;
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearCanvas);