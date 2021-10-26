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

let red_counter = 0
let yellow_counter = 0

app.post('/winner/:colour', (req, res) => {
    let colour = req.params.colour
    if (colour === "red"){
        red_counter++
    }
    else if (colour === "yellow"){
        yellow_counter++
    }
    let response = {red: red_counter, yellow: yellow_counter}
    res.json(response)
});

app.listen(3000, 
    console.log)

    