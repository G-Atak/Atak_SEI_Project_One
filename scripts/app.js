const boardGrid = document.querySelector('.boardGrid')
const cells = []
// console.log(boardGrid)
// const startFrogger = document.querySelector('#startFrogger')

// const frogStartPosition = document.createElement('.FrogStartPosition')
// document.classList.add(frogStartPosition)
// const frogHome = document.createElement('.frogHome')
// document.classList.add(frogHome)
// const frog = document.createElement('.frog')
// document.classList.add(frog)



const gridWidth = 10
const totalCells = gridWidth * gridWidth

//function for creating grid cells on the grid board
function buildGridBoard() {
  for (let i = 0; i < totalCells; i++){
    const cell = document.createElement('div')
    boardGrid.appendChild(cell)
    cells.push(cell)
    cell.textContent = i
  }
}
buildGridBoard()

//  Creating function for starting game
// function handlefroggerStart(){
//   console.log('clicked')

// }
// Adding eventlistener to the froggerStart handle
// startFrogger.addEventListener('click',handlefroggerStart)




