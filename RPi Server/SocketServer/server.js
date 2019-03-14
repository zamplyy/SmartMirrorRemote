var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('Starting Bridge server, listening on port 3000'));

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
    console.log('A client just joined on', socket.id);

    socket.on('message', (message) => {
        console.log(message)
        socket.emit('message', 'Your socket id: ' + socket.id)
    });

    socket.on('restart', (message) => {
        console.log('restart ' + message)
        console.log('Need to translate and forward to MM')
    });

    socket.on('brightness', (message) => {
        console.log('brightness ' + message)
        console.log('Need to translate and forward to MM')
    });

    socket.on('changePosition', (message) => {
        console.log('changePosition ' + message)
        console.log('Need to translate and forward to MM')
    });

    socket.on('getLayout', (message) => {
        console.log('getLayout ' + message)
        console.log('Need to translate and forward to MM')
    });

    socket.on('installModule', (message) => {
        console.log('installModule ')
        console.log('Name is : ' + message.name)
        console.log('Url is : ' + message.Url)
        console.log('Need to translate and forward to MM')
    });
    

});


