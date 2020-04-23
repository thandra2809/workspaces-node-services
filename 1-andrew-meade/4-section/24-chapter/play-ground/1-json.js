const fs = require('fs');
/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync('books.json', bookJSON);
console.log(bookJSON);*/

const dataBuffer = fs.readFileSync('books.json')
console.log(dataBuffer)
const dataJSON =  dataBuffer.toString()
console.log(dataJSON)
