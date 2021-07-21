const boardGrid = document.querySelector('.boardGrid')
console.log(boardGrid)

const frogStartPosition = document.createElement('.FrogStartPosition')
document.classList.add(frogStartPosition)
const frogHome = document.createElement('.frogHome')
document.classList.add(frogHome)
const gridWidth = 20
const totalCells = gridWidth * gridWidth

function buildGridBoard() {
  for (let i = 0; i < totalCells; i++){
    const cell = document.createElement('div')
    boardGrid.appendChild(cell)
    console.log(buildGridBoard[i])
  }
}
buildGridBoard()




