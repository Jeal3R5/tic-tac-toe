console.log("JS is running");


/*----- constants -----*/
// X & O - Players
const PLAYERS = {
    '1': 'X',
    "-1": 'O', 
}
// winning combinations
const COMBOS = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
    [0, 4, 8],
    [2, 4, 6]
]



/*----- app's state (variables) -----*/

let board;  //data variable that stores the board positons, and whaT they hold
let turn;    // will be either x or o
let winner; //this can be 3 things, x/o, tie, or null



//These are stretch goals for your game
//Bonus - if player wants to resign (make a button)
//Bonus - score for games won
//Bonus - timer for game turn



/*----- cached element references -----*/

//message container - h2 -dont
//the game squares
//reset button


/*----- event listeners -----*/

// mouse click on 9 squares
// mouse click on reset button
// optional - user initiates game start 



/*----- functions -----*/

//initialize (start) game
//handle user interaction (this includes a lot of things)
//render messages to the DOM
//check for 3 in a row or winner - (main game logic)
