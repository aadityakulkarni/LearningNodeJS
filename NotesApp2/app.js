const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
// getting input from process module of nodejs
// const command = process.argv[2]
const title = {
    describe: 'Title of a note',
    demand: true,
    alias: 't'
};

const body = {
    describe: 'Body of a note',
    demand: false,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'List all Notes')
    .command('read', 'Read a single note', {
        title
    })
    .command('remove', 'Remove the note', {
        title
    })
    .help()
    .argv;
// getting input from yargs 
const command = argv._[0];
// console.log("Command: " + command);
// console.log(argv);
if ( command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
        console.log(`Note with title ${argv.title} already exists`);
    } else { 
        console.log('Note created');
        notes.logNote(note);
    }
} else if (command === 'list') {
    // console.log('Listing all the notes');
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else { 
        console.log('Note not found');
    }    
} else if (command === 'remove') {
    //console.log('Removing all the notes');
    notes.removeNote(argv.title) ? console.log(`Note with title ${argv.title} was removed successfully!`) :
        console.log(`Note with title ${argv.title} was not removed successfully!`);
} else {
    console.log('Command not recognized');
}