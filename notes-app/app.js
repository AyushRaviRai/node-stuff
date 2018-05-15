console.log(" == Starting app.js == ");

// requiring file system module
const fs = require('fs');

// requring os module
const os = require('os');
user = os.userInfo();

// requiring files
const notes = require('./notes.js');

// lodash module
const _ = require('lodash');

sum = notes.add(1,2);
console.log("The Sum is  : " + sum);
process.exit()

fs.appendFile("coolshit.txt", `Hello This in from os module ${user.username}`, function (error) {
	if (error) {
		console.log("File main nahi ghus paaya :P");
	}	
});
