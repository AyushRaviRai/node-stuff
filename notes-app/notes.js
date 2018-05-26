console.log(" == Starting notes.js ==");


var fs = require('fs');
const notesFile = './notes.json';

var getNotes = () => {
    try {
        rawNotes = fs.readFileSync(notesFile);
        notes = JSON.parse(rawNotes);
        return notes
    } catch(err) {
        console.log(err);
        return [];
    }
};

var saveNote = (notes) => {
    try {
        fs.writeFileSync(notesFile, notes);
    } catch (err) {
        console.log(err.error)
    }
};

// Add Note 
var addNote = (title, body) => {
    notes = [];
    newNote = {
        title : title,
        body : body
    };
    notes = getNotes();
    notes.push(newNote);
    stringNote = JSON.stringify(notes);
    saveNote(stringNote);

    console.log("Add Note Method : ", title, body);
};

// Getting All Notes
var getAll = () => {
    console.log("Getting All Notes");
};

// Note ko padh rahe hain 
var readNote = (title) => {
    notes = getNotes();
    if (notes) {
        for (x in notes) {
            console.log(notes[x].title);
        }
    }
    console.log("Reading Note with title :", title);
};

// deleting node from our awsome
var removeNote = (title) => {
    console.log("Removing Note with title : ", title);
};



module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}; 
