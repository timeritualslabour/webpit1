
var express = require('express');
var app= express();
require('dotenv').config()
//console.log(process.env)
const PORT = process.env.PORT || 3000;
var server=app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
//var server = app.listen(process.env.PORT, '0.0.0.0')

app.use(express.static('public'));

var socket = require('socket.io');

var io = socket(server);
console.log('My socket server is running');
io.sockets.on('connection', newConnection);


function newConnection(socket) {
//socket.broadcast.emit('name', {namer: socket.id});
    console.log('new connection' + socket.id);
socket.on('mouse', mouseMsg);

function mouseMsg(data) {
    //console.log('new connection' + socket.id);
socket.broadcast.emit('mouse', data);
}
}