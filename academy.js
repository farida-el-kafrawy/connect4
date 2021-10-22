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
    console.log("Button " + b_column + " clicked");
    for (x = 5; x > -1; x--) {
        if (board[x][b_column] === null) {
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
    checkWinner()
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
const reset = document.getElementById("reset-button")
reset.addEventListener("click"
    , resetGame)

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 7; y++) {
            // vertical wins
            if (board[x][y] === board[x + 1][y] && board[x + 1][y] === board[x + 2][y] && board[x + 2][y] === board[x + 3][y] && board[x][y] != null) {
                winningColour()
            }
        }
    }
    for (x = 0; x < 6; x++) {
        for (y = 0; y < 4; y++) {
            // horizontal wins
            if (board[x][y] === board[x][y + 1] && board[x][y + 1] === board[x][y + 2] && board[x][y + 2] === board[x][y + 3] && board[x][y] != null) {
                winningColour()
            }
        }
    }
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 4; y++) {
            // diagonal
            if (board[x][y] === board[x + 1][y + 1] && board[x + 2][y + 2] === board[x + 1][y + 1] && board[x + 2][y + 2] === board[x + 3][y + 3] && board[x][y] != null) {
                winningColour()
            }
        }
    }
    // second diagonal
    for (x = 3; x < 6; x++) {
        for (y = 0; y < 4; y++) {
            if (board[x][y] === board[x - 1][y + 1] && board[x - 2][y + 2] === board[x][y] && board[x - 2][y + 2] === board[x - 3][y + 3] && board[x][y] != null) {
                winningColour()
            }
        }
    }
    if (turn === 44) {
        console.log("Nobody won!")
        return "nobody"
    }
}

const message = document.getElementById("theMessage")

function winningColour() {
    if (turn % 2 === 0) {
        console.log("Red won!")
        const request_1 = new Request('http://localhost:3000/winner/red', { method: 'POST' });
        fetch(request_1)
            .then(response => response.json().then(result => {
                message.innerHTML = `Red has won ${result.red} times, Yellow has won ${result.yellow} times`
            })
            )
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
    }
    else {
        console.log("Yellow won!")
        const request_1 = new Request('http://localhost:3000/winner/yellow', { method: 'POST' });
        fetch(request_1)
            .then(response => response.json().then(result => {
                message.innerHTML = `Red has won ${result.red} times, Yellow has won ${result.yellow} times`
            })
            )
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
    }
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    for (x = 0; x < 6; x++) {
        for (y = 0; y < 7; y++) {
            board[x][y] = null;
        }
    }
    turn = 1
    console.log(board)
    drawBoard(board)
    document.getElementById("0").disabled = false;
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
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
