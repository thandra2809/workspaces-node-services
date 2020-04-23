const fs = require('fs');

const dataBuffer = fs.readFileSync('sample.json');
const dataJSON = dataBuffer.toString();

const user = JSON.parse(dataJSON);

user.name = 'Srini';
user.age = 38;

const userJSON = JSON.stringify(user);
fs.writeFileSync('sample-modified.json', userJSON)
