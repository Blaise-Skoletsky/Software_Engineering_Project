const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "http://localhost:3000" } });

var bodyParser = require('body-parser')


app.use(express.static(path.join(__dirname, 'public')));
app.use('/socket.io-client', express.static(path.join(__dirname, 'node_modules/socket.io-client/dist')));
app.use(bodyParser.json())

// Serve your HTML file when accessing the root URL
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/page.html'));
});

// Serve client.js file
app.get('/socccerle.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/soccerle.js'));
});


var playerInfo = 0
io.on('connection', socket => {
    console.log('Client connected');

    socket.on('get_player_request', () => {
        
        
        //Should generate another request here from the python!

        io.to(socket.id).emit('recieve_player', playerInfo);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});



app.post('/', function(req, res){
    playerInfo = req.body.playerInfo
    console.log(playerInfo)
    res.status(200).send('success')
})

// Move this line to the end of the code
server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
