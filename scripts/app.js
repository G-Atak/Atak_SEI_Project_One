const gridBoard = document.querySelector('.gridBoard')
const cells = []
// console.log(boardGrid)
const startFrogger = document.querySelector('#startFrogger')

const gridWidth = 10
const totalCells = gridWidth * gridWidth

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

cells[frogPosition].classList.add(frogClass)

function handlefroggerStart(){
  console.log('clicked')

}

startFrogger.addEventListener('click', handlefroggerStart)



