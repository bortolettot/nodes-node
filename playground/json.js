const fs = require('fs');

var originalNote = {
    title: 'Some title',
    boby: 'Some boby'
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var notesString = fs.readFileSync('notes.json');
var json = JSON.parse(notesString);
console.log(json);
console.log(json.title);
