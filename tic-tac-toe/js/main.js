// console.log("Js is up and running!")

// /*----- constants -----*/

// const PLAYERS = {
//   '1': 'X',
//   '-1': 'O',
// }

// const COMBOS = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6]
// ]


// /*----- app's state (variables) -----*/

// let board; // a data variable that stores the board positions, and what they hold
// let turn; // will be either X or O
// let winner; // this can be 3 things X/O, Tie, or null

// // Bonus - score for games won
// // Bonus - if the player wants to quit
// // Bonus - timer for game turn

// /*----- cached element references -----*/

// const domMessage = document.querySelector('h2');
// const domSquares = document.querySelectorAll('.square');
// const resetButton = document.querySelector('button');
// const gameBoard = document.querySelector('.game-board');

// /*----- event listeners -----*/

// gameBoard.addEventListener("click", handleMove); // game squares
// resetButton.addEventListener("click", init)

// // optional - user initiates game start


// /*----- functions -----*/

// // initialize (start) game
// function init() {
//   //console.log("init function called")

//   board = new Array(9).fill(null)  //[null, null, null x(9)] - tracks game play
 
//   winner = null; //set initial winner to no one 
// }
// //////////////////////////////////////////////////// need to add something to clear the init function
// init();  //start the game on page load




// // handle user interaction
// function handleMove(event) {
//   const squareNumber = parseInt(event.target.dataset.square);  //this tells us which square was clicked

//   if (board[squareNumber] !== null || winner !== null) {
//     return                  //end of turn
// }


// board[squareNumber] = turn;     //set the index in the board array so we know that spot has been claimed

// turn *= -1;  //switched the turn

// winner = checkForWinner() //check for winner
// }  

// render();     //render message to user



// // check for 3 in a row - or winner (main game logic)
// function checkForWinner() {
//   //console.log("check for winner function called");
//     for (let index in COMBOS) {
//         if(
//             board[COMBOS[index][0]] == turn &&
//             board[COMBOS[index][0]] == turn &&
//             board[COMBOS[index][0]] ==turn
//         ) {
//             return turn
//         }
//     }

// if (board.includes(null)) {
//     return null
// }
//     return "tie"
// }





// // render messages to the dom
// function render() {
//   //console.log('render function called')
//   board.forEach(function(value, index) {       //puts an x or o on the board
//       domSquares[index].textContent = PLAYERS[value]
//   })

// }
// render();



// if (!winner) {
//     domMessage.textContent = `${PLAYERS[turn]}'s turn`
//     //tell whose turn it is
// } else if (winner === "tie") {
//     domMessage.textContent = "Tie Game!"
//     //tell the urse there is a tie
// } else {
//     //tells them the winner
//     domMessage.textContent = `${PLAYERS[winner]} Wins!`
// }














////////////////////////////////////////////////////////
//INSTRUCTORS CORRECT CODE, FIGURE OUT WHERE YOU SCREWED UP
//////////////////////////////////////////////////////////







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
  board = new Array(9).fill(null) // [null,null,null....] x9 - tracks game play
  turn = 1; // X goes first
  winner = null; // set initial winner to no one
            //////////////////////////////////////////////// IS THIS WHERE WE PUT THE RENDER?????
}

// start the game on page load
init();

// handle user interaction
function handleMove(event) {
  // console.log(`${event.target.dataset.square} was clicked`)
  const squareNumber = parseInt(event.target.dataset.square);

  if (board[squareNumber] || winner) {
    return // end the turn
  }

  // set the index in the board array so we know that spot has been claimed
  board[squareNumber] = turn;
  // check for winner
  winner = checkForWinner();
  // switched the turn
  turn *= -1;
  // render message to user
  render();
}

// check for 3 in a row - or winner (main game logic)
function checkForWinner() {
  console.log("check for winner function called");
  // this can be 3 things X/O, Tie, or null
  for (let index in COMBOS) {
    if (
      board[COMBOS[index][0]] == turn &&
      board[COMBOS[index][1]] == turn &&
      board[COMBOS[index][2]] == turn 
    ) {
      return turn
    }
  }

  if (board.includes(null)) {
    return null
  }

  return "tie"
}

// render messages to the dom
function render() {
  // console.log('render function called')
  // puts an x or o on the board mapped from board
  board.forEach(function (value, index) {
    domSquares[index].textContent = PLAYERS[value]
  })

  if (!winner) {
    // tell whose turn it is
    domMessage.textContent = `${PLAYERS[turn]}'s turn`
  } else if (winner === "tie"){
    // tell the user there is a tie
    domMessage.textContent = "Tie game!"
  } else {
    // tell them the winner
    domMessage.textContent = `${PLAYERS[winner]} Wins!`
  }

}
