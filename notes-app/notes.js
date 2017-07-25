console.log('in my custom file');

var fs = require('fs');

var fetchNotes = () => {
    var notes = [];
    //try catch to avoid error if file does not exist
    try{
        var notesStr = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesStr);
        return notes;
    } catch(e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title, body) => {
    //console.log('Adding note :',title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body 
    };

    //check for duplicates before Adding
    //the filter is standar array function which takes the notes array has a callback, 
    //which returns true and sets the note object in var duplicateNote if title matches 
    //else it will be false and var duplicateNote will be empty
    var duplicateNote = notes.filter((note) => {
        return note.title === title;
    });

    //---- if you have single statement in callback function you can do as below without curly braces and return statement
    //var duplicateNote = notes.filter((note) => note.title === title)

    if(duplicateNote.length === 0 ) {
        console.log('adding new note');
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    

};

var getAll = () => {
    console.log('Getting all notes');
    var notes = fetchNotes();
    return notes;
};

var getNote = (title) => {
    console.log('getting note :',title);
};

var removeNote = (title) => {
    console.log('Remove note :',title);
    var notes = fetchNotes();
    //this will creaet a 
    var noteArrayWithoutPassedTitle = notes.filter((note) => {
        return note.title !== title;
    });
    saveNotes(noteArrayWithoutPassedTitle);
    return notes.length !== noteArrayWithoutPassedTitle.length;
};

module.exports = {
    addNote,
    getAll : getAll,  //or getall -- both are same because the property and var name is a match -- this is es6 syntax
    getNote,
    removeNote 
};


