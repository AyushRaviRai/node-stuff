const fs = require('fs');

var jsonShit = {
	title: "shit",
	body: "hahahaha you are shit sucker"	
};

jsonObject = JSON.stringify(jsonShit);
console.log(jsonObject);

fs.writeFileSync('notes.json', jsonObject);

// Read json
string = fs.readFileSync('notes.json');

shitJson = JSON.parse(string);
console.log(shitJson);