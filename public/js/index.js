// We have loaded in socket library
// To listen data from server and to sent data from client to server 
		
var socket=io();
	socket.on('connect',function(){
	console.log('Connected to server');
	
	})
	socket.on('disconnect',function(){
			console.log('Disconnected from server')
	})
socket.on('newMessage',function(message){
	console.log('Got new Message',message);
	var li=jQuery('<li></li>')
	li.text(`${message.from}:${message.text}`)
	jQuery('#messages').append(li);
})
jQuery('#message-form').on('submit',function(event){
	event.preventDefault();
	socket.emit('createMessage',{
		from:'User',
		text:jQuery('[name=message]').val()
	},function(){

	})
})
