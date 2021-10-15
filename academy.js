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

function takeTurn(event) {
    b_column = this.id
    console.log("Button "+ b_column + " clicked");
    for (x = 5; x > -1; x--){
        if (board[x][b_column] === null){
            if (turn % 2 === 0) {
            board[x][b_column] = "yellow"
            break
        }
        else {
            board[x][b_column] = "red"
            break
        }
    }
    }
    turn += 1
    console.log(board)
    drawBoard(board)
}

const button0 = document.getElementById("0")
button0.addEventListener("click"
, takeTurn)
const button1 = document.getElementById("1")
button1.addEventListener("click"
, takeTurn)
const button2 = document.getElementById("2")
button2.addEventListener("click"
, takeTurn)
const button3 = document.getElementById("3")
button3.addEventListener("click"
, takeTurn)
const button4 = document.getElementById("4")
button4.addEventListener("click"
, takeTurn)
const button5 = document.getElementById("5")
button5.addEventListener("click"
, takeTurn)
const button6 = document.getElementById("6")
button6.addEventListener("click"
, takeTurn)

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
    for (x = 0; x < 6; x++) {
        for (y = 0; y < 7; y++){
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
