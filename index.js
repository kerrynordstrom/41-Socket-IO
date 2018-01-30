'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('./public'));

const USERS = {};

io.on('connection', (socket) => {
	USERS[socket.id] = {};
	USERS[socket.id].username = 'foobar';

	console.log('JOINED', socket.id);

	socket.on('disconnect', () => {
		console.log('LEFT', socket.id);
	});
	
	socket.on('send-message', (data) => {
		data.username = USERS[socket.id].username
		data.timestamp = new Date();

		console.log('MESSAGE:', data.message);
		io.emit('receive-message', data);
	});

	socket.on('set-username', (data) => {
		USERS[socket.id].username = data.username;
	})

});

	let PORT = 3000;
	http.listen(PORT, () => {
		console.log('http://localhost:' + PORT);
	});