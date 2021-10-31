// Make your changes to store and update game state in this file
let turn = 1
let win = ""

async function takeTurn(event) {
    // getBoard()
    b_column = this.id
    console.log("Button " + b_column + " clicked");
    // need to change how I check if a position is filled or not
    var first_empty = await checkifpositionempty(b_column)
    console.log(first_empty.result)
    if (turn % 2 === 0) {
        const fill_with_yellow = new Request('http://localhost:3000/board/yellow/' + first_empty + "/" + b_column, { method: 'POST' });
        fetch(fill_with_yellow)
        console.log(first_empty + "," + b_column + " is now yellow")
    }
    if (turn % 2 !== 0) {
        const fill_with_red = new Request('http://localhost:3000/board/red/' + first_empty + "/" + b_column, { method: 'POST' });
        fetch(fill_with_red)
        console.log(first_empty + "," + b_column + " is now red")
    }
    turn += 1
    // need to draw board differently
    drawBoard(await getBoard())
    // need to check winner differently
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
async function checkWinner() {
    console.log("checkWinner was called");
    var api_board = await getBoard()
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 7; y++) {
            // vertical wins
            if (api_board[x][y] === api_board[x + 1][y] && api_board[x + 1][y] === api_board[x + 2][y] && api_board[x + 2][y] === api_board[x + 3][y] && api_board[x][y] != null) {
                winningColour()
            }
        }
    }
    for (x = 0; x < 6; x++) {
        for (y = 0; y < 4; y++) {
            // horizontal wins
            if (api_board[x][y] === api_board[x][y + 1] && api_board[x][y + 1] === api_board[x][y + 2] && api_board[x][y + 2] === api_board[x][y + 3] && api_board[x][y] != null) {
                winningColour()
            }
        }
    }
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 4; y++) {
            // diagonal
            if (api_board[x][y] === api_board[x + 1][y + 1] && api_board[x + 2][y + 2] === api_board[x + 1][y + 1] && api_board[x + 2][y + 2] === api_board[x + 3][y + 3] && api_board[x][y] != null) {
                winningColour()
            }
        }
    }
    // second diagonal
    for (x = 3; x < 6; x++) {
        for (y = 0; y < 4; y++) {
            if (api_board[x][y] === api_board[x - 1][y + 1] && api_board[x - 2][y + 2] === api_board[x][y] && api_board[x - 2][y + 2] === api_board[x - 3][y + 3] && api_board[x][y] != null) {
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
    // console.log(api_board)
    return api_board
}

position_empty = ""

async function checkifpositionempty(y) {
    var api_board = await getBoard()
    console.log(api_board)
    for (x = 5; x > -1; x--) {
        if (api_board[x][y] === null) {
            console.log(x + "," + y + " is empty")
            console.log(api_board[x][y])
            position_empty = "yes"
            first_empty = x
            break
        } else {
            console.log(x + "," + y + " is not empty")
            console.log(api_board[x][y])
            position_empty = "no"
        }
    }
    console.log(first_empty)
    return first_empty
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
