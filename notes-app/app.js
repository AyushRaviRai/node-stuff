console.log("Starting Our App Suckers get ready ");

// requiring file system module
const fs = require('fs');

fs.appendFile("coolshit.txt", "We are gonna make some cool shit", function (error) {
	if (error) {
		console.log("File main nahi ghus paaya :P");
	}	
});
