const fs = require('fs');

const getNotes = function () {
    return 'Your Notes...';
}

const addNote = function (title, body) {

    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({title, body});
        saveNotes(notes);
        console.log('A new note has been added');
    } else {
        console.log('Note with title already exists');
    }

}

const loadNotes = function () {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesJSON = notesBuffer.toString();
        return JSON.parse(notesJSON);

    } catch (error) {
        return [];
    }
}

const saveNotes = function (notes) {
    const notesJSON = JSON.stringify(notes);
    try {
        fs.writeFileSync('notes.json', notesJSON)
    } catch (e) {
        console.log(e.message);
    }

}

const removeNote = function(title,body){

}

module.exports = {getNotes, addNote,removeNote}