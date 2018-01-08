const expect=require('expect');
const {Users}=require('./users');
describe('Users',()=>{
	var users;
	beforeEach(()=>{
		users=new Users();
		users.users=[{
			id:'1',
			name:'Mike',
			room:'Suit'
		},{
			id:'2',
			name:'Watson',
			room:'Sherlock'
		},{
			id:'3',
			name:'Harvey',
			room:'Suit'
		}];
	})
	it('should add new user',()=>{
		var users=new Users();
		var user={
			id:123,
			name:'Edge',
			room:'wwe'
		};
		var resUser=users.addUser(user.id,user.name,user.room);
		// expect(users.users).toEqual([resUser]);
		 expect(users.users).toEqual([user]);
	})
	it('should remove a user',()=>{
		var userId='1';
		var user=users.removeUser(userId);
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);


	})
	it('should not remove a user',()=>{
		var userId='99';
		var user=users.removeUser(userId);
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	})
	it('should find user',()=>{
		var userId='2';
		var user=users.getUser(userId);
		expect(user.id).toBe(userId);
	})
	it('should not find user',()=>{
		var userId='99';
		var user=users.getUser(userId);
		expect(user).toNotExist();

	})
	it('should return names for suit series',()=>{
		var userList=users.getUserList('Suit');

		expect(userList).toEqual(['Mike','Harvey'])
	})
	it('should return names for sherlock series',()=>{
		var userList=users.getUserList('Sherlock');
		expect(userList).toEqual(['Watson'])
	})
})