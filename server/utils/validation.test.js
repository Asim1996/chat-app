const expect=require('expect');
const {isRealString}=require('./validation');
describe('isRealString',()=>{
	it('should reject non string values',()=>{
		
		var res=isRealString(123);
		expect(res).toBe(false)
	})
	it('should reject string with only spaces',()=>{
		var str='       ';
		var res=isRealString(str);
		expect(res).toBe(false)
	})
	it('should allow string with non space character',()=>{
		var str='  edge  ';
		var res=isRealString(str);
		expect(res).toBe(true)
	})
})