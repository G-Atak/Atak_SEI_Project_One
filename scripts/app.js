const gridBoard = document.querySelector('.gridBoard')
const startFrogger = document.querySelector('#startFrogger')
// const scoreBox = document.querySelector('#score-box')
const cells = []


//! Errors I made while coding
//const carsMovingRight = ['C1','C2','C3','C4']
// const carsMovingLeft = ['C1','C2','C3','4']
// const logs = ['log1','log2','log3']
// const carsMovingRightPosition = carsMovingRight.map(gridBoard => cells[88,86,84,82,80])
// const carsMovingLeftPosition = carsMovingLeft.map(gridBoard  => cells[71,73,75,77])
//cells[carPosition].classList.add(carClass)

let lives = 3
const logOneClass = 'logOneClass'
const logTwoClass = 'logTwoClass'
const logThreeClass = 'logThreeClass'
const logFourClass = 'logFourClass'

const carClass = 'carClass'
const carClassTwo = 'carClassTwo'
const carClassThree = 'carClassThree'

let frogPosition = 94
let carOne = 80
let carTwo = 79
let carThree = 60
let logOne = 40
let logTwo = 39
let logThree =  20
let logFour = 19
// let score = 0

const width = 10
const totalCells = width * width
const frogClass = 'frog' 

function buildGridBoard() {
  for (let i = 0; i < totalCells; i++){
    const cell = document.createElement('div')
    gridBoard.appendChild(cell)
    cells.push(cell)
    cell.textContent = i
  }
}

buildGridBoard()

function addFrog(){
  cells[frogPosition].classList.add(frogClass)
}
function removeFrog(){
  cells[frogPosition].classList.remove(frogClass)
}

function handleKeyUp(event){
  console.log('key up!',event.keyCode)
  
  const horizontalPosition = frogPosition % width 
  const verticalPosition = Math.floor(frogPosition / width)
  removeFrog()
  switch (event.keyCode){
    case 39:
      if (horizontalPosition < width - 1) frogPosition++
      hitCar()
      rideLog()
      break
    case 37:
      if (horizontalPosition > 0) frogPosition--
      hitCar()
      break
    case 38:
      if (verticalPosition > 0) frogPosition -= width 
      hitCar()
      break
    case 40:
      if (verticalPosition < width - 1) frogPosition += width
      hitCar()
      break
    default:
      console.log('invalid key')
  }
  addFrog(frogPosition)
}

function addCarOne(){
  cells[carOne].classList.add(carClass)
}

function removeCarOne(){
  cells[carOne].classList.remove(carClass)
}

function moveCarOne(){
  setInterval(() => {
    removeCarOne()
    carOne++
    addCarOne()
    if (carOne === 90){
      removeCarOne()
      carOne = 80
      addCarOne()
    }
  } , 500)
}
moveCarOne()

function addCarTwo(){
  cells[carTwo].classList.add(carClassTwo)
}

function removeCarTwo(){
  cells[carTwo].classList.remove(carClassTwo)
}

function moveCarTwo(){
  setInterval(() => {
    removeCarTwo()
    carTwo--
    addCarTwo()
    if (carTwo === 69){
      removeCarTwo()
      carTwo = 79
      addCarTwo()
    }
  } , 300)
}
moveCarTwo()


function addCarThree(){
  cells[carThree].classList.add(carClassThree)
}

function removeCarThree(){
  cells[carThree].classList.remove(carClassThree)
}

function moveCarThree(){
  setInterval(() => {
    removeCarThree()
    carThree++
    addCarThree()
    if (carThree === 70){
      removeCarThree()
      carThree = 60
      addCarThree()
    }
  } , 200)
  
}
moveCarThree()


function addLogOne(){
  cells[logOne].classList.add(logOneClass)
}

function removeLogOne(){
  cells[logOne].classList.remove(logOneClass)
}

function moveLogOneClass(){
  setInterval(() => {
    removeLogOne()
    logOne++
    addLogOne()
    if (logOne === 48){
      removeLogOne()
      logOne = 40
      addLogOne()
    }
  } , 500)
}
moveLogOneClass()

function addLogTwo(){
  cells[logTwo].classList.add(logTwoClass)
}

function removeLogTwo(){
  cells[logTwo].classList.remove(logTwoClass)
}

function moveLogTwo(){
  setInterval(() => {
    removeLogTwo()
    logTwo--
    addLogTwo()
    if (logTwo === 29){
      removeLogTwo()
      logTwo = 39
      addLogTwo()
    }
  } , 300)
}
moveLogTwo()


function addLogThree(){
  cells[logThree].classList.add(logThreeClass)
}

function removeLogThree(){
  cells[logThree].classList.remove(logThreeClass)
}

function moveLogThreeClass(){
  setInterval(() => {
    removeLogThree()
    logThree++
    addLogThree()
    if (logThree === 30){
      removeLogThree()
      logThree = 20
      addLogThree()
    }
  } , 500)
}
moveLogThreeClass()


function addLogFour(){
  cells[logFour].classList.add(logFourClass)
}

function removeLogFour(){
  cells[logFour].classList.remove(logFourClass)
}

function moveLogFourClass(){
  setInterval(() => {
    removeLogFour()
    logFour--
    addLogFour()
    if (logFour === 9){
      removeLogFour()
      logFour = 19
      addLogFour()
    }
  } , 500)
}
moveLogFourClass()

function hitCar(){
  if (cells[frogPosition] === cells[carOne]) {
    lives -= 1
    console.log(lives)
  } 
  if (cells[frogPosition] === cells[carTwo]) {
    lives -= 1
  }
  if (cells[frogPosition] === cells[carThree]) {
    lives -= 1
  }
  if (lives === 0 ) {
    alert('Game Over')
    window.location.reload(94)
  }
}


function rideLog(){
  if (cells[frogPosition] === cells[logOne]) {
    
    console.log('frog++')
  } 
}
rideLog
//   if (cells[frogPosition] === cells[logTwo]) {
//     lives -= 1
//   }
//   if (cells[frogPosition] === cells[carThree]) {
//     lives -= 1
//   }
//   if (lives === 0 ) {
//     alert('Game Over')
//     window.location.reload(94)
//   }
// }

cells[frogPosition].classList.add(frogClass)
cells[carTwo].classList.add(carClassTwo)
cells[carThree].classList.add(carClassThree)
cells[logOne].classList.add(logOneClass)
cells[logTwo].classList.add(logTwoClass)
cells[logThree].classList.add(logThreeClass)
cells[logFour].classList.add(logFourClass)

function handlefroggerStart(){
  console.log('StartFrogger now')
}


document.addEventListener('keyup', handleKeyUp)
startFrogger.addEventListener('click', handlefroggerStart)
document.addEventListener('keyup', handleKeyUp)




