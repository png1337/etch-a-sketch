const container = document.querySelector('#container');

function createGrid(rows=16, columns=16){
  for (let i = 0; i < rows ; i++) {
   for (let j = 0; j < columns; j++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-item');
      const row = normCoordinate(i);
      const column = normCoordinate(j);
      gridElement.id = row + column;
      container.appendChild(gridElement)
    };
  };
};

function normCoordinate(num) {
  let txt = num.toString();
  if(txt.length == 1) {
    txt = '0' + txt
  };
  return txt;
};

createGrid();