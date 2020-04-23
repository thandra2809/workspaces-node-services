const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes...';
}

const addNote = (title, body) => {

    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({title, body});
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesJSON = notesBuffer.toString();
        return JSON.parse(notesJSON);

    } catch (error) {
        return [];
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    try {
        fs.writeFileSync('notes.json', notesJSON)
    } catch (e) {
        console.log(e.message);
    }

}

const removeNote = (title) => {

    const notes = loadNotes();
    const notesToRetain = notes.filter((note) => {
        return note.title !== title;
    })

    if (notes.length > notesToRetain.length) {
        saveNotes(notesToRetain);
        console.log(chalk.green.inverse('Note Removed!'));
    } else {
        console.log(chalk.red.inverse('No Note Found'));
    }
}

module.exports = {getNotes, addNote, removeNote}