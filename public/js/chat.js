// We have loaded in socket library
// To listen data from server and to sent data from client to server 
		
var socket=io();
function scrollToBottom () {
  // Selectors
  var messages = jQuery('#messages');
  var newMessage = messages.children('li:last-child')
  // Heights
  var clientHeight = messages.prop('clientHeight');
  var scrollTop = messages.prop('scrollTop');
  var scrollHeight = messages.prop('scrollHeight');
  var newMessageHeight= $('#messages li').last().innerHeight();
  var lastMessageHeight=$('#messages li:nth-last-child(2)').innerHeight();
  if (clientHeight + scrollTop + newMessageHeight +lastMessageHeight >= scrollHeight) {
    messages.scrollTop(scrollHeight);
  }
}

	socket.on('connect',function(){
	console.log('Connected to server');
	
	})
	socket.on('disconnect',function(){
			console.log('Disconnected from server')
	})
socket.on('newMessage',function(message){
	console.log('Got new Message',message);
	var formattedTime=moment(message.createdAt).format('h:mm a');
	var template=jQuery('#message-template').html();
	var html=Mustache.render(template,{
		from:message.from,
		text:message.text,
		createdAt:formattedTime
	});
	jQuery('#messages').append(html);
	scrollToBottom();
	})
socket.on('newLocationMessage',function(message){
	console.log('Got new Location',message);
	var formattedLocationTime=moment(message.createdAt).format('h:mm a');
	console.log(formattedLocationTime);
	var template=jQuery('#location-message-template').html();
	var html=Mustache.render(template,{
		from:message.from,
		url:message.url,
		createdAt:formattedLocationTime
	});
	jQuery('#messages').append(html);
	scrollToBottom();
	// var li=jQuery('<li></li>')
	// var a=jQuery('<a target="_blank">My current location</a>');
	// li.text(`${message.from} ${formattedLocationTime} :`);
	// a.attr('href',message.url);
	// li.append(a);
	// jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit',function(event){
	event.preventDefault();
	var messageTextbox=jQuery('[name=message]');
	socket.emit('createMessage',{
		from:'User',
		text:messageTextbox.val()
	},function(){
		messageTextbox.val("");
	})
})
var locationButton=jQuery("#send-location");
locationButton.on('click',function(){

	if(!navigator.geolocation){
		return alert('Geolocation not supported by your browser');
	}
	locationButton.attr('disabled','disabled').text('Sending location ...');
	navigator.geolocation.getCurrentPosition(function(position){

	locationButton.removeAttr('disabled').text('Send location');
			socket.emit('createLocationMessage',{
				latitude:position.coords.latitude,
				longitude:position.coords.longitude
			})
		},function(){
			locationButton.removeAttr('disabled').text('Send location');
			alert('Unable to fetch location');	
		})
		});
	
