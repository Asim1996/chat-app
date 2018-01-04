// We have loaded in socket library
// To listen data from server and to sent data from client to server 
		
var socket=io();
	socket.on('connect',function(){
	console.log('Connected to server');
	
	})
	socket.on('disconnect',function(){
			console.log('Disconnected from server')
	})

socket.on('newMessage',function(msg){
	console.log('Got new Message',msg)
})