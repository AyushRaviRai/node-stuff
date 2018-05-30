const yargs = require('yargs')
const apiCall = require('axios')


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

geocode
	.geocodeAddress(argv.address)
	.then((result) => {
		console.log(result.address)
		return weather.getWeather(result.lattitude, result.longitude)
	})  
	.then((result) => {
		console.log(result)	
	})
	.catch((error) => {
		console.log(error)
	});	







