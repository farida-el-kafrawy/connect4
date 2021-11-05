/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Make your changes to store and update game state in this file
let turn = 1
let win = ""
async function runGame(event) {
    drawBoard(await getBoard())
    b_column = this.id
    console.log("Button " + b_column + " clicked")
    if (b_column === "reset-button") {
        resetGame()
    }
    else {
        var first_empty = await checkifpositionempty(b_column)
        console.log(first_empty)
        takeTurn(turn, first_empty, b_column)
        turn += 1
        drawBoard(await getBoard())
        checkWinner(await getBoard())
    }
}


async function takeTurn(turn, first_empty, b_column) {
    if (turn % 2 === 0) {
        const fill_with_yellow = new Request('http://localhost:3000/board/yellow/' + first_empty + "/" + b_column, { method: 'POST' });
        fetch(fill_with_yellow)
        turn += 1
        return console.log(first_empty + "," + b_column + " is now yellow")
    }
    if (turn % 2 !== 0) {
        const fill_with_red = new Request('http://localhost:3000/board/red/' + first_empty + "/" + b_column, { method: 'POST' });
        fetch(fill_with_red)
        turn += 1
        return console.log(first_empty + "," + b_column + " is now red")
    }
}


const button0 = document.getElementById("0")
button0.addEventListener("click"
    , runGame)
const button1 = document.getElementById("1")
button1.addEventListener("click"
    , runGame)
const button2 = document.getElementById("2")
button2.addEventListener("click"
    , runGame)
const button3 = document.getElementById("3")
button3.addEventListener("click"
    , runGame)
const button4 = document.getElementById("4")
button4.addEventListener("click"
    , runGame)
const button5 = document.getElementById("5")
button5.addEventListener("click"
    , runGame)
const button6 = document.getElementById("6")
button6.addEventListener("click"
    , runGame)
const reset = document.getElementById("reset-button")
reset.addEventListener("click"
    , runGame)

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
async function checkWinner(api_board) {
    if (winningBoard(api_board)=== true){
        winningColour()
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
        return "red"
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
        return "yellow"
    }
}

// Set the game state back to its original state to play another game.
async function resetGame() {
    console.log("resetGame was called");
    const reset_game = new Request('http://localhost:3000/board/reset', { method: 'POST' });
    fetch(reset_game)
    turn = 1
    var api_board = await getBoard()
    drawBoard(api_board)
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
async function getBoard() {
    console.log("getBoard was called");
    const response = await fetch('http://localhost:3000/board/', { method: 'GET' })
    let api_board = await response.json();
    console.log("board is");
    console.log(api_board)
    return api_board
}

position_empty = ""

async function checkifpositionempty(b_column) {
    var api_board = await getBoard()
    console.log(api_board)
    if (api_board[0][b_column] !== null) {
        console.log("column is full")
        document.getElementById(b_column).disabled = true
    }
    else {
        return findemptyspace(api_board, b_column)
    }
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