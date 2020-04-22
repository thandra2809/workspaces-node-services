const chalk = require('chalk')
const validator = require('validator');
const getNotes = require('./notes');

const message = getNotes();

console.log(message);

console.log(chalk.red(validator.isEmail('example.com')));

