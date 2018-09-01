const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 1234;

const sockets = [];

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    sockets.push(socket);
});

server.listen(port, function(){
    console.log("Server up and running on port", port)
})



