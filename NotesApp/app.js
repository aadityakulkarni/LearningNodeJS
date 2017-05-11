// modules - from node 
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
//modules created by me
const notes = require('./notes.js');
const res = notes.addNote();
// console.log(res);
// const user = os.userInfo();
// // console.log(user);

// // fs.appendFile('greetings.txt', ' Hello ' + user.username + ' !', function(err) {
//     // using backticks with template strings ${}
// fs.appendFile('greetings.txt', ` Hello ${user.username} !`, function(err) {
//     if(err) {
//         console.log('Unable to write to the file');
//     }
// });

console.log(_.isString(true));
console.log(_.isString(1));
console.log(_.isString("hello "));
console.log(_.uniq([2,2,4,6,9,1,2,3]));