const socket = io();
const test = 2;

socket.emit('newsocket', test);