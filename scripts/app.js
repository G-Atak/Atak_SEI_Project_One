const gridBoard = document.querySelector('.gridBoard')
const cells = []
const carsMovingRight = ['C1','C2','C3','C4']
const carsMovingLeft = ['C1','C2','C3','4']
const logs = ['log1','log2','log3']

const startFrogger = document.querySelector('#startFrogger')

const width = 10
const totalCells = width * width

const frogClass = 'frog'
let frogPosition = 94

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
document.addEventListener('keyup', handleKeyUp)

cells[frogPosition].classList.add(frogClass)

function handlefroggerStart(){
  console.log('clicked')

}
startFrogger.addEventListener('click', handlefroggerStart)



