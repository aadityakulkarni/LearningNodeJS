
// JSON stringify example
// const obj = {
//     name: 'Aaditya'
// };

// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// JSON parse example
// const personString = '{ "name": "Aaditya", "age": 25 }';
// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

const originalNote = {
    'title': 'Og title 1',
    'body': 'Og body 1'
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);