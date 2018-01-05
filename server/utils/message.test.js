var expect=require('expect');
var {generateMessage,generateLocationMessage}=require('./message')
describe('generateMessage',()=>{
	it('should generate correct message object',()=>{
		// var res=generateMessage('edge','hello');
		// console.log(res);
		// expect(res.from).toBe('edge');
		// expect(res.text).toBe('hello');
		// expect(res.createdAt).toBeA('number');
		var from='John';
		var text="Some message";
		var message=generateMessage(from,text);
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text})
	})
})

describe('generateLocationMessage',()=>{
	it('should generate correct location object',()=>{
		var from="Cena";
		var lat=1;
		var lng=1;
		url='https://www.google.com/maps?q=1,1';
		var message=generateLocationMessage(from,lat,lng);
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,url});

	})
})