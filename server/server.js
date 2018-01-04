const path=require('path');
const http=require('http')
const express=require('express');
const socketIO=require('socket.io');
const publicPath=path.join(__dirname,'../public')
const port=process.env.PORT||3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));
// Socket Represents an individual connection
 // While io represents entire socket group
io.on('connection',(socket)=>{
	console.log('New user connected');
	socket.emit('newUser',{
		from:'Admin',
		text:'Welcome to chat app',
		createdAt:new Date().getTime()
	})
	socket.broadcast.emit('newUser',{
		from:'Admin',
		trext:'New user joined',
		createdAt:new Date().getTime()
	})
	

	socket.on('createMessage',(msg)=>{
		console.log('New Message',msg);
		io.emit('newMessage',{
			from:msg.from,
			text:msg.text,
			createdAt:new Date().getTime()
		})
		// socket.broadcast.emit('newMessage',{
		// 	from:msg.from,
		// 	text:msg.text,
		// 	createdAt:new Date().getTime()
		// })
	})
	socket.on('disconnect',()=>{
		console.log('User was disconnected');
	})
})

server.listen(port,()=>{
	console.log(`Server is up on ${port}`);
})


