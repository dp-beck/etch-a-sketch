const container = document.querySelector('#container');

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

function randomColor() {
  return "#" + randomHex() + randomHex() + randomHex() + randomHex() + randomHex() + randomHex();
}

function turnToBlack() {
  return "#000000";
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
    if (size < 100) {
      break;
    }
    alert("Please choose a number that is less than 100");
  }
  document.getElementById("container").style.gridTemplateColumns = "repeat(" + size + ", auto)";
  document.getElementById("container").style.gridTemplateRows = "repeat(" + size + ", auto)";
  makeDivs(size*size);
}

function setRandomColorMode() {
  clearCells();
  container.removeEventListener('mouseover', function (e) {
    e.target.style.background = turnToBlack()});

  container.addEventListener('mouseover', function (e) {
    e.target.style.background = randomColor()});
}

function setBlackMode() {
  clearCells();
  container.removeEventListener('mouseover', function (e) {
    e.target.style.background = randomColor()});
    
  container.addEventListener('mouseover', function (e) {
    e.target.style.background = turnToBlack()});
}

makeDivs(256);
container.addEventListener('mouseover', function (e) {
  e.target.style.background = randomColor()});
