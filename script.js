function createGrid(size=16){
  document.documentElement.style.setProperty('--size', size);

  for (let i = 0; i < size ; i++) {
    for (let j = 0; j < size; j++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('gridItem');
      container.appendChild(gridItem);
    };
  };
  createHover();
};

function resetGrid() {
  let gridItems = document.querySelectorAll('.gridItem');
  gridItems.forEach((gridItem) => container.removeChild(gridItem));
};

function createNewGrid() {
  const gridSize = prompt('How many rows and columns should the sketch have?');
  resetGrid();
  createGrid(gridSize);
}

function createHover() {
  const gridItems = document.querySelectorAll('.gridItem')
  gridItems.forEach((gridItem) => gridItem.addEventListener('mouseenter', function () {
    this.classList.add('hovering');
  }));
}

const container = document.querySelector('#container');

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', createNewGrid);

createGrid();