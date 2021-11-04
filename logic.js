function winningBoard(board) {
    console.log("checkWinner was called");
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 7; y++) {
            // vertical wins
            if (board[x][y] === board[x + 1][y] && board[x + 1][y] === board[x + 2][y] && board[x + 2][y] === board[x + 3][y] && board[x][y] != null) {
                return true
            }
        }
    }
    for (x = 0; x < 6; x++) {
        for (y = 0; y < 4; y++) {
            // horizontal wins
            if (board[x][y] === board[x][y + 1] && board[x][y + 1] === board[x][y + 2] && board[x][y + 2] === board[x][y + 3] && board[x][y] != null) {
                return true
            }
        }
    }
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 4; y++) {
            // diagonal
            if (board[x][y] === board[x + 1][y + 1] && board[x + 2][y + 2] === board[x + 1][y + 1] && board[x + 2][y + 2] === board[x + 3][y + 3] && board[x][y] != null) {
                return true
            }
        }
    }
    // second diagonal
    for (x = 3; x < 6; x++) {
        for (y = 0; y < 4; y++) {
            if (board[x][y] === board[x - 1][y + 1] && board[x - 2][y + 2] === board[x][y] && board[x - 2][y + 2] === board[x - 3][y + 3] && board[x][y] != null) {
                return true
            }
        }
    }
}

function findemptyspace(board, b_column) {
    for (x = 5; x > -1; x--) {
        if (board[x][b_column] === null) {
            console.log(x + "," + b_column + " is empty")
            console.log(board[x][b_column])
            position_empty = "yes"
            first_empty = x
            console.log(first_empty)
            return first_empty
        }
    }
}

if (typeof exports === 'object') {
    module.exports = {
        winningBoard,
        findemptyspace
    }
} else {
    console.log("Running in Browser")
}
