const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {

    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
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
    const notesToRetain = notes.filter((note) => note.title !== title);

    if (notes.length > notesToRetain.length) {
        saveNotes(notesToRetain);
        console.log(chalk.green.inverse('Note Removed!'));
    } else {
        console.log(chalk.red.inverse('No Note Found'));
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.blue.inverse('Your notes'));

    notes.forEach((note) => {
        console.log('In List notes', note.title);
    })

}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(chalk.inverse(note.body));
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }

}

module.exports = {addNote, removeNote, listNotes, readNote}