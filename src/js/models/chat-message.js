class ChatMessage {
	constructor(message) {
		this.username = message.username
		this.message = message.message
		this.timestamp = message.timestamp
	}

	render(parentElement) {
		let container = document.createElement('div')
		let username = document.createElement('span')
		let timestamp = document.createElement('span')
		let message = document.createElement('span')

		container.classList.add('message');
		username.classList.add('username');
		timestamp.classList.add('timestamp');


		container.appendChild(timestamp);
		container.appendChild(username);
		container.appendChild(message);

		parentElement.appendChild(div)
	}
}