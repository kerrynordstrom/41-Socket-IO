'use strict';

const socket = io();

let sendMessageForm = document.getElementById('send-message-form');
let messageInput = document.getElementById('message-input');
let messageContainer = document.getElementById('messages');

sendMessageForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let message = messageInput.value;
	socket.emit('send-message', {message: message});
});

socket.on('receive-message', (data) => {
	let message = new ChatMessage(data)
	message.render(messageContainer);
});

let setUsernameForm = document.getElementById('send-username-form');
let usernameInput = document.getElementById('username-input');

setUsernameForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let username = usernameInput.value;
	socket.emit('set-username', { username: username });
});