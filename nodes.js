const fs = require('fs');
const fileName = 'notes-data.json';
var addNote = (title, boby) =>{
    var notes = []; 
    var note = {
        title, 
        boby
    };
    try{
        if(fs.existsSync(fileName)){
            var file = fs.readFileSync(fileName);
            notes = JSON.parse(file);
        }
    }catch (e){
        console.log(e);        
    }

    var duplicateNotes = notes.filter((note)=> note.title == title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
    
};

var getAll = () =>{
    console.log('Get All');
};

var getNote = (title) =>{
    console.log('getNote');
};

var removeNote = () =>{
    console.log('remove');
};

module.exports = {
    addNote, 
    getAll,
    getNote, 
    removeNote
};