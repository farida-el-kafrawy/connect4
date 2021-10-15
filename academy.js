// Make your changes to store and update game state in this file
let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]
let turn = 1
let win = ""

var reply_click = function()
{
    console.log("Button "+this.id+" clicked");
}
document.getElementById('0').onclick = reply_click;
document.getElementById('1').onclick = reply_click;
document.getElementById('2').onclick = reply_click;
document.getElementById('3').onclick = reply_click;
document.getElementById('4').onclick = reply_click;
document.getElementById('5').onclick = reply_click;
document.getElementById('6').onclick = reply_click;

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    if (board[row][column] === null) {
        if (turn % 2 === 0) {
            board[row][column] = "yellow"
        }
        else {
            board[row][column] = "red"
        }
        turn += 1
    }
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    for (x = 0; x <= 5; x++) {
        // vertical wins
        if (board[0][x] === board[1][x] && board[0][x] === board[2][x] && board[0][x] != null) {
            if (turn % 2 === 0) {
                return "red"
            }
            else {
                return "yellow"
            }
        }
        // horizontal wins
        if (board[x][0] === board[x][1] && board[x][0] === board[x][2] && board[x][0] != null) {
            if (turn % 2 === 0) {
                return "red"
            }
            else {
                return "yellow"
            }
        }
        // first horizontal 
        if (board[1][1] === board[0][0] && board[1][1] === board[2][2] && board[1][1] != null) {
            if (turn % 2 === 0) {
                return "red"
            }
            else {
                return "yellow"
            }
        }
        // second horizontal
        if (board[1][1] === board[2][0] && board[1][1] === board[0][2] && board[1][1] != null) {
            if (turn % 2 === 0) {
                return "red"
            }
            else {
                return "yellow"
            }
        }
        if (turn === 10){
            return "nobody"
        }
    }
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    // board.fill(null);
    for (x = 0; x <= 6; x++) {
        for (y = 0; y <= 6; y++){
            board[x][y]= null
        }
    }
    turn = 1
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
