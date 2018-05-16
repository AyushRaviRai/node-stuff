console.log(" == Starting app.js == ");

// requiring file system module
const fs = require('fs');

// requiring files
const notes = require('./notes.js');

// lodash module
const _ = require('lodash');

// yargs
const yargs = require('yargs');

const argv = yargs.argv

var action = argv.action;

if (action === 'add') {
	notes.addNote(argv.title, argv.body);
} else if (action === 'list') {
	notes.getAll();
} else if (action === 'read') {
	notes.readNote(argv.title);
} else if (action === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log("Bhai kuch to pass kar de , hawa main chalau kya !!");
}

 