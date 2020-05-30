document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const ScoreDisplay = document.querySelector('#score')
  const StartBtn = document.querySelector('#start-button')
  const width = 10

  //the tetrominoes
  const lTetromino = [
    [1, width+1,width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [width*2, width+1, width*2+1, width+2],
    [0, width, width+1, width*2+1],
    [width*2, width+1, width*2+1, width+2],
    [0, width, width+1, width*2+1]
  ]

  const tTetrimino =[
    [1, width, width+1, width+2],
    [1, width+1, width*2+1, width+2],
    [width, width+1, width+2, width*2+1],
    [width, 1, width+1, width*2+1]
  ]

  const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
  ]

  const iTetrimino = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ]

const theTetrominos = [lTetromino, zTetromino, tTetrimino, oTetromino, iTetrimino]

let currentPosition = 63
let currentRotation = 3

//randomly select a tetromino and its rotation
let random = Math.floor(Math.random()*theTetrominos.length)
let current = theTetrominos[random][currentRotation]


//draw the tertromino
function draw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.add('tetromino')
  })
}

//unDraw the tetromino
function unDraw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino')
  })
}

draw()


})
