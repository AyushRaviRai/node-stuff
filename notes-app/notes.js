console.log(" == Starting notes.js ==");

// Add Note 
var addNote = (title, body) => {
    console.log("Add Note Method : ", title, body);
};

// Getting All Notes
var getAll = () => {
    console.log("Getting All Notes");
};

// Note ko padh rahe hain 
var readNote = (title) => {
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
