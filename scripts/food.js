import { onSnake, expanSnake } from './snake_code.js'
import { randomGridPosition } from './grid.js'
let food = getRandomFoodPosition()
const expansionRate = 5
export function update() {
  if (onSnake(food)){
    expanSnake(expansionRate)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {

  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}