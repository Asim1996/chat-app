var expect=require('expect');
var {generateMessage}=require('./message')
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