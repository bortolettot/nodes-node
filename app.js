const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const nodes = require('./nodes.js');
const argv = yargs.argv;

var command = argv._[0];
if(command === 'add'){
    console.log('Add new note');
    nodes.addNote(argv.title, argv.boby);
}else if (command === 'list'){
    console.log('Listing all notes');
    nodes.getAll();
}else if (command === 'read'){
    console.log('Reading nodes');
    nodes.getNote(argv.title);
}else if (command === 'remove'){
    console.log('Removing notes');
    nodes.removeNote();
}else{
    console.log('Command not recognized');
}