const gridBoard = document.querySelector('.gridBoard')
const cells = []


//! Errors I made while coding
//const carsMovingRight = ['C1','C2','C3','C4']
// const carsMovingLeft = ['C1','C2','C3','4']
// const logs = ['log1','log2','log3']
// const carsMovingRightPosition = carsMovingRight.map(gridBoard => cells[88,86,84,82,80])
// const carsMovingLeftPosition = carsMovingLeft.map(gridBoard  => cells[71,73,75,77])
//cells[carPosition].classList.add(carClass)


const carClass = 'carClass'
// const carClassOne = 'carClassOne'
// const carClassTwo = 'carClassTwo'
// const carClassThree = 'carClassThree'

// const carClassOnePosition = 
// const carClassTwo = 'carClassTwo'
// const carClassThree = 'carClassThree'

let frogPosition = 94
let carOne = 80



const startFrogger = document.querySelector('#startFrogger')

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
      break
    case 37:
      if (horizontalPosition > 0) frogPosition--
      break
    case 38:
      if (verticalPosition > 0) frogPosition -= width 
      break
    case 40:
      if (verticalPosition < width - 1) frogPosition += width
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
  } , 1000)
  

}
moveCarOne()


// cells[carOne].classList.add('carClass')
// cells[carClassOne].classList.add('carClassOne')
// cells[carClassTwo].classList.add('carClassTwo')
// cells[carClassThree].classList.add('carClassThree')


document.addEventListener('keyup', handleKeyUp)

cells[frogPosition].classList.add(frogClass)

// cells[carOne].classList.add('carClass')
// cells[carClassOne].classList.add('carClassOne')
// cells[carClassTwo].classList.add('carClassTwo')
// cells[carClassThree].classList.add('carClassThree')





function handlefroggerStart(){
  console.log('clicked')

}
startFrogger.addEventListener('click', handlefroggerStart)
document.addEventListener('keyup', handleKeyUp)




