#41 - Messenger App

##Description

This app allows the user to input a username and a message, which is rendered to the DOM.  It retains a timestamp and the user's name unless they wish to change it.  These inputs are sent to the backend where they are compiled and appended to the DOM. Once sent back from the backend, each message is logged beneath the chat input.

#### Frontend 
* Create a simple website where users can chat
* Create an input that allows a user to choose their username
* Display a log of chats with usernames, messages and timestamps
* Add Socket IO to your frontend, with a means for adding subsciber handlers
* Subscibe to the backend events

### Models
* Use Vanilla ES6 classes to model chat messages
* Chat messages should have at least the following properties
  * username
  * message
  * timestamp
* Add `render(parentElement)` method to the class
  * Use vanilla DOM manipulations to create elements and attach them to the
    page.
  * Do not use jQuery.
  * Do not ever use `innerHTML`.
  * Use `.textContent` for text content.

#### Backend
* Add Socket IO to your backend, with a means for adding subscriber handlers 
* Subscribe to events dispatched from the frontend
  * In your subscibers publish data to the frontends to update the chat
* You do not need to store data to a database. It's OK to store data in the
  global state of the server for now.
