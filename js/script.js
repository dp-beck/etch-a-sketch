//Need to Deactivate Other Event Listeners Before Creating New Ones

let container = document.querySelector('#container');

function makeDivs (numberOfDivs) {
  for (i=0; i<numberOfDivs; i++) {
    let cell = document.createElement('div');
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

function randomHex() {
  const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  return hexArray[Math.floor(Math.random()*16)];
}

function clearCells() {
  let myElements = document.querySelectorAll(".cell");
  for (let i=0; i < myElements.length; i++) {
    myElements[i].style.backgroundColor = "white";
  }
}

function deleteCells() {
  let myElements = document.querySelectorAll(".cell");
  for (let i=0; i < myElements.length; i++) {
    myElements[i].parentNode.removeChild(myElements[i]);
  }
}

function createGrid(){
  deleteCells();
  while (true) {
    var size = window.prompt("How many sides per square?","16");
    if (0 < size < 100) {
      break;
    }
    alert("Please choose a positive number that is less than 100.");
  }
  document.getElementById("container").style.gridTemplateColumns = "repeat(" + size + ", auto)";
  document.getElementById("container").style.gridTemplateRows = "repeat(" + size + ", auto)";
  makeDivs(size*size);
}

function setFadeToBlack(e) {
  if (e.target.style.background == '') {
    e.target.style.background = 'hsl(0, 0%, 100%)';
  } else if (e.target.style.background == 'rgb(255, 255, 255)') {
    e.target.style.background = 'hsl(0, 0%, 90%)';
  } else if (e.target.style.background == 'rgb(230, 230, 230)') {
   e.target.style.background = 'hsl(0, 0%, 80%)';
  } else if (e.target.style.background == 'rgb(204, 204, 204)') {
    e.target.style.background = 'hsl(0, 0%, 70%)';
  } else if (e.target.style.background == 'rgb(179, 179, 179)') {
    e.target.style.background = 'hsl(0, 0%, 60%)';
  } else if (e.target.style.background == 'rgb(153, 153, 153)') {
    e.target.style.background = 'hsl(0, 0%, 50%)';
  } else if (e.target.style.background == 'rgb(128, 128, 128)') {
    e.target.style.background = 'hsl(0, 0%, 40%)';
  } else if (e.target.style.background == 'rgb(102, 102, 102)') {
    e.target.style.background = 'hsl(0, 0%, 30%)';
  } else if (e.target.style.background == 'rgb(77, 77, 77)') {
    e.target.style.background = 'hsl(0, 0%, 20%)';
  } else if (e.target.style.background == 'rgb(51, 51, 51)') {
    e.target.style.background = 'hsl(0, 0%, 10%)';
  } else if (e.target.style.background == 'rgb(26, 26, 26)') {
    e.target.style.background = 'hsl(0, 0%, 0%)';
    }
  }

function setFadeToBlackMode() {
  createGrid();
  container.removeEventListener('mouseover', setRandomColor);
  container.removeEventListener('mouseover', setBlack);
  container.addEventListener('mouseover', setFadeToBlack);
}

function setRandomColor(e) {
  e.target.style.background =  "#" + randomHex() + randomHex() + randomHex() + randomHex() + randomHex() + randomHex();
}

function setRandomColorMode() {
  createGrid();
  container.removeEventListener('mouseover', setFadeToBlack);
  container.removeEventListener('mouseover', setBlack);
  container.addEventListener('mouseover', setRandomColor);
}

function setBlack(e) {
  e.target.style.background = 'black';
}

function setBlackMode() {
  createGrid();
  container.removeEventListener('mouseover', setRandomColor);
  container.removeEventListener('mouseover', setFadeToBlack);
  container.addEventListener('mouseover', setBlack)
  };

makeDivs(256);
//container.addEventListener('mouseover', function (e) {
//  e.target.style.background = randomColor()});
