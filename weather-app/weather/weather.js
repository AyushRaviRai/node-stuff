const request = require('request')

const apiUrl = 'https://api.darksky.net/forecast/e4fa5a38b05cfe4accbc2908df260b7e/'
module.exports.getWeather = (lat, lng) => {
	return new Promise((resolve, reject) => {
		request({
			url : apiUrl + `${lat},${lng}`,
			json : true
		}, (error, response, body) => {
			if (error) {
				reject("Kuch fata gaya hain dekh lo forecast waaalo")
			} else if (response.statueCode === 404) {
				reject("Server se kch alag sa code aaya hain kya kare :P")
			} else if (response.statusCode === 200) {
				resolve(body.currently.temperature)
			}
		})	
	})

	
}