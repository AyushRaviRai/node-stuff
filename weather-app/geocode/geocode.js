
const request = require('request')
const geocodeApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBh24TZUm2L133FfVYoMb_xVjJap9boAK4&address='

module.exports.geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		let sanitizedAddress = encodeURIComponent(address)

		request({
			url : geocodeApiUrl + sanitizedAddress,
			json : true
		}, (error, response, body) => {
			if (error) {
				// do some error shit
				reject("Teri ...")
			} else if (body.status === 'ZERO_RESULTS') {
				// no actual result is found
				reject("Unable to find the address")
			} else if (body.status === 'OK') {
				var {lat, lng} = body.results[0].geometry.location
				result = {
					address : body.results[0].formatted_address,
					longitude : lng,
					lattitude : lat
				}
				resolve(result)
			} else {
				reject("Something is very wrong , kya kar diya bhai ...")
			}
		})	
	})
	
}