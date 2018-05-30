const express = require('express');
const hbs = require('hbs');



var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
	response.render("home.hbs", {
		shit_type : "Maha",
		current_year : new Date().getFullYear(),
		page_title : "Home Page Suckers"
	});
});

app.get('/about', (request, response) => {
	response.render("about.hbs", {
		shit_type : "Utter",
		current_year : new Date().getFullYear(),
		page_title : "This is About Page"
	});
});

app.get('/bad', (request, response) => {
	response.statusCode = 500;
	response.send({
		errorCode : 505,
		errorMessage : "Some Shitty Error has occured"
	});
});

app.listen(3000, () => {
	console.log("Server is up and running on port 3000");
});
