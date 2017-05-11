const fs=require('fs');

// module.exports.addNote = () => {
//     console.log('Adding Note');
//     return 'New note';
// };

const fetchNotes = () => {
    // try catch block - handle errors where the program 
    //tries to read non- existent notes- data.json file
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        // return empty array if notes-data.json file does not exists
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };

    // check if the note already exists
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};


const getAll = () => {
    //console.log('Getting all notes');
    return fetchNotes();

};

const removeNote = (title) => {
    //console.log('Removing note: ', title);
    let notes = fetchNotes();
    const removedNotes = notes.filter((note) => note.title !== title);
    saveNotes(removedNotes);
    return notes.length !== removedNotes.length;

};

const getNote = (title) => {
    let notes = fetchNotes();
    const removedNotes = notes.filter((note) => note.title === title);
    return removedNotes[0];
};

const logNote = (note) => { 
    console.log('--------------------------------------')
    console.log(`Note Title: ${note.title}`);
    console.log(`Note Body: ${note.body}`);
}

module.exports = {
    //addNote:addNote is identical with just addNote (ES6 syntax)
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}