function createCanvas(dimension, gridSize) {
  const playArea = document.getElementById('play-area');
  const numTiles = dimension * dimension;
  for (let i = 0; i < numTiles; i++) {
    const tile = document.createElement('div');
    tile.classList.add('grid-tile');
    tile.style.height = `${gridSize / dimension}px`;
    tile.style.width = `${gridSize / dimension}px`;
    tile.style.transitionDuration = '0.3s';
    tile.addEventListener('mouseover', (e) => {
      e.target.style['background-color'] = tileColor;
    });
    playArea.appendChild(tile);
  }
}

function clearTiles() {
  const tiles = document.querySelectorAll('.grid-tile');
  tiles.forEach((tile) => {
    tile.remove();
  })
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

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function updateCanvasSize(gridDimension, gridSize) {
  clearTiles();
  createCanvas(gridDimension, gridSize);
}

let gridDimension = 24;
const gridSize = 499;
createCanvas(gridDimension, gridSize);

const colorPicker = document.getElementById('color-pick-main');
colorPicker.addEventListener('change', updateColorFromColorPicker);
let tileColor = colorPicker.value;

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearCanvas);

const canvasSize = document.getElementById('size');
canvasSize.addEventListener('change', function(e) {
  updateCanvasSize(e.target.value, gridSize);
});