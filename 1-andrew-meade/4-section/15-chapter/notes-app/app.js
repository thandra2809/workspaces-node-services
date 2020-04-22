const chalk = require('chalk')
const validator = require('validator');
const getNotes = require('./notes');

const message = getNotes();
console.log(message);

const command = process.argv[2];

console.log(process.argv)

if (command === 'add') {
    console.log('Adding Notes');
} else if (command === 'remove') {
    console.log('Removing Notes');
}


