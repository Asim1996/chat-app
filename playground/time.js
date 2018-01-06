//Jan 1st 1970 00:00:00 am
// var date=new Date();
// console.log(date.getMonth()); 
var moment=require('moment')
// Create a moment object which represents the current state 
var date=moment();
console.log(date.fromNow());
console.log(date.format('h:mm a'))
// date.add(1,'years').subtract(9,'months')
// console.log(date.format('MMM Do, YYYY'));

var someTimeStamp=moment().valueOf();
console.log(someTimeStamp);
