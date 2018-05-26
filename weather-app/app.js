const request = require('request');
const yargs = require('yargs');

const argv = yargs
	.options({
		a : {
			demand : true,
			alias : "address",
			describe : "Custom Users address for which we want to fetch data",
			string : true
		}
	})
	.help()
	.argv;

console.log(argv);

const apiPath = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBh24TZUm2L133FfVYoMb_xVjJap9boAK4'

request({
	url : apiPath + '&address=' + encodeURIComponent(argv.address),
	json : true
}, (error, response, body) => {
	if (error) {
		// do some error shit
	} else if (body.status === 'ZERO_RESULTS') {
		// no actual result is found
		console.log("Unable to find the address")
	} else if (body.status === 'OK') {
		var {lat, lng} = body.results[0].geometry.location
		console.log(body.results[0].formatted_address, lat, lng)
	} else {
		console.log("Something is very wrong , kya kar diya bhai ...")
	}
});
