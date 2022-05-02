function createCanvas(dimension, gridSize, type) {
  const playArea = document.getElementById('play-area');
  const numTiles = dimension * dimension;
  for (let i = 0; i < numTiles; i++) {
    const tile = document.createElement('div');
    tile.classList.add('grid-tile');
    tile.style.height = `${gridSize / dimension}px`;
    tile.style.width = `${gridSize / dimension}px`;
    tile.addEventListener(type, changeTileColor);
    playArea.appendChild(tile);
  }
}

function changeTileColor(e) {
  e.target.style['background-color'] = tileColor;
}

function addChangeTileColorEventListner(eventType) {
  const tiles = document.querySelectorAll('.grid-tile');
  tiles.forEach((tile) => {
    tile.addEventListener(eventType, changeTileColor);
  });
}

function removeEventListnerFromTiles(eventType) {
  const tiles = document.querySelectorAll('.grid-tile');
  tiles.forEach((tile) => {
    tile.removeEventListener(eventType, changeTileColor);
  });
}

function changeColorPlacementMethod(type) {
  if (type === "manual") {
    removeEventListnerFromTiles('mouseover');
    addChangeTileColorEventListner('click');
  } else if (type == "normal") {
    removeEventListnerFromTiles('click');
    addChangeTileColorEventListner('mouseover');
  }
}

function clearTiles() {
  const tiles = document.querySelectorAll('.grid-tile');
  tiles.forEach((tile) => {
    tile.remove();
  });
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

function updateCanvasSize(gridDimension, gridSize, type) {
  clearTiles();
  createCanvas(gridDimension, gridSize, type);
}

function validateCanvasSize(e) {
  if (e.target.value > 100) {
    e.target.value = 100;
  } else if (e.target.value < 1) {
    e.target.value = 1;
  }
}

function setupRadioButtons() {
  const radioOptions = document.querySelectorAll('.radio');
  radioOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
      changeColorPlacementMethod(e.target.value);
    });
  });
}

let gridDimension = 24;
const gridSize = 499;
createCanvas(gridDimension, gridSize, 'mouseover');

const colorPicker = document.getElementById('color-pick-main');
colorPicker.addEventListener('change', updateColorFromColorPicker);
let tileColor = colorPicker.value;

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearCanvas);

const canvasSize = document.getElementById('size');
canvasSize.addEventListener('change', function(e) {
  validateCanvasSize(e);
  let radioCheckedType = document.querySelector('input[name="color-option"]:checked').value;
  if (radioCheckedType === "manual") {
    radioCheckedType = 'click'
  } else if (radioCheckedType == "normal") {
    radioCheckedType = 'mouseover'
  }
  updateCanvasSize(e.target.value, gridSize, radioCheckedType);
});

setupRadioButtons();
