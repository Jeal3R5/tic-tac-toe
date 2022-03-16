// console.log("JS is running");


// /*----- constants -----*/
// // X & O - Players
// const PLAYERS = {
//     '1': 'X',
//     "-1": 'O', 
// }
// // winning combinations
// const COMBOS = [
//     [0, 1, 2], 
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8]
//     [0, 4, 8],
//     [2, 4, 6]
// ]



// /*----- app's state (variables) -----*/

// let board;  //data variable that stores the board positons, and whaT they hold
// let turn;    // will be either x or o
// let winner; //this can be 3 things, x/o, tie, or null



// //These are stretch goals for your game
// //Bonus - if player wants to resign (make a button)
// //Bonus - score for games won
// //Bonus - timer for game turn



// /*----- cached element references -----*/

// const domMessage = document.querySelector('h2');                //message container - h2 -dont
// const domSquares = document.querySelectorAll('.square');        //the game squares
// const resetButton = document.querySelector('button');           //reset button
// const gameBoard = document.querySelector('gameBoard');

// /*----- event listeners -----*/

// // mouse click on 9 squares
// gameBoard.addEventListener("click", handleMove);       //game-squares
// resetButton.addEventListener("click", init);             //mouse click on reset



// // mouse click on reset button
// // optional - user initiates game start 



// /*----- functions -----*/

// //initialize (start) game
// function init() {
//     console.log("init function called")
//     board = new Array(9).fill(null)     //null, null, null, (9 nulls)
// }

// //handle user interaction 
// function handleMove() {
//     console.log("handle move function called")
// }

// //check for 3 in a row - or winner (main game logic)
// function checkForWinner() {
//     console.log("check for winner function called")
// }







// //render messages to the DOM
// function render() {
//     console.log('render function called')
// }























console.log("Js is up and running!")

/*----- constants -----*/

const PLAYERS = {
  '1': 'X',
  '-1': 'O',
}

const COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


/*----- app's state (variables) -----*/

let board; // a data variable that stores the board positions, and what they hold
let turn; // will be either X or O
let winner; // this can be 3 things X/O, Tie, or null

// Bonus - score for games won
// Bonus - if the player wants to quit
// Bonus - timer for game turn

/*----- cached element references -----*/

const domMessage = document.querySelector('h2');
const domSquares = document.querySelectorAll('.square');
const resetButton = document.querySelector('button');
const gameBoard = document.querySelector('.game-board');

/*----- event listeners -----*/

gameBoard.addEventListener("click", handleMove); // game squares
resetButton.addEventListener("click", init)

// optional - user initiates game start


/*----- functions -----*/

// initialize (start) game
function init() {
  console.log("init function called")

  board = new Array(9).fill(null)  //[null, null, null x(9)] - tracks game play
  turn = 1; //x goes first
  winner = null; //set initial winner to no one 
}

init();  //start the game on page load

// handle user interaction
function handleMove(event) {
  const squareNumber = parseInt(event.target.dataset.square)  //this tells us which square was clicked
  board[squareNumber] = turn     //set the index in the board array so we know that spot has been claimed
  turn *= -1  //switched the turn
  winner = checkForWinner() //check for winner
}  render()     //render message to user

// check for 3 in a row - or winner (main game logic)
function checkForWinner() {
  console.log("check for winner function called");
}

// render messages to the dom
function render() {
  console.log('render function called')
}

