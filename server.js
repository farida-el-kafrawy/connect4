const express = require('express')
//let cors = require('cors')
const app = express()
//app.use(cors())

let options = {
    index: "connect4.html"
};

app.use(express.static(__dirname, options));

app.get('/users/:name', (req, res) => {

    console.log(`${req.query.greeting} ${req.params.name}`)
    res.send(`${req.query.greeting} ${req.params.name}`);

});

// Get Score
let red_counter = 0
let yellow_counter = 0

app.post('/winner/:colour', (req, res) => {
    let colour = req.params.colour
    if (colour === "red") {
        red_counter++
    }
    else if (colour === "yellow") {
        yellow_counter++
    }
    let response = { red: red_counter, yellow: yellow_counter }
    res.json(response)
});

// Get Score
app.get('/winner', (req, res) => {
    let response = { red: red_counter, yellow: yellow_counter }
    res.json(response)
});

// Make Move
let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

app.post('/board/:colour/:x/:y', (req, res) => {
    let colour = req.params.colour
    if (colour === "red") {
        board[req.params.x][req.params.y] = "red"
    }
    else if (colour === "yellow") {
        board[req.params.x][req.params.y] = "yellow"
    }
    res.send(board)
    // console.log(board)
});

// Get board
app.get('/board', (req, res) => {
    res.send(board)
    console.log(board)
});

// Reset board
app.post('/board/reset', (req, res) => {
    for (x = 0; x < 6; x++) {
        for (y = 0; y < 7; y++) {
            board[x][y] = null;
        }
    }
    // console.log(board)
    res.send(board)
        
});

app.listen(3000, 
    console.log)