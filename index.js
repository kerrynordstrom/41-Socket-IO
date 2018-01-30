'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

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
		data.timestamp = new Date().toLocaleTimeString();

		io.emit('receive-message', data);
	});
	
	socket.on('set-username', (data) => {
		USERS[socket.id].username = data.username;
	})	
});

	let port = 3000;
	http.listen(port, () => {
		console.log('http://localhost:' + port);
	});