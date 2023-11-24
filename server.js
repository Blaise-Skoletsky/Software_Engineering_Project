const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketIo(server, {cors: {origin: "http://localhost:5000"}});

//var zmq = require('zeromq')
//var zmqsock = zmq.socket('pull')
//zmqsock.connect('tcp://localhost:5555')
//
//zmqsock.on('message', (message) => {
//    var playerInfo = message.toString()
//
//    console.log(playerInfo)
//
//
//})


app.use(express.static(path.join(__dirname, 'public')));
app.use('/socket.io-client', express.static(path.join(__dirname, 'node_modules/socket.io-client/dist')));


// Serve your HTML file when accessing the root URL
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/page.html'));
});

// Serve client.js file
app.get('/socccerle.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/soccerle.js'));
});

io.on('connection', socket => {

    



})





server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});