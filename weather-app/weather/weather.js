const request = require('request');

var getWeather = (lat, long, callback ) => {
    request({
        url: `https://api.darksky.net/forecast/8f81f916e355323c80c43d0f2ed0b11b/${lat},${long}`,
        json: true 
    }, (error, response, body) => {
        if(error) { 
            callback('unable to connect to weather api server');
        } else if (response.statusCode === 400) {
            callback('unable to fetch weather');
        } else if(response.statusCode === 200) {
            callback(undefined, {
                temparature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
        }
    });
};

//8f81f916e355323c80c43d0f2ed0b11b -- key for developer.forecast.io or https://darksky.net/dev/account
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//https://api.darksky.net/forecast/8f81f916e355323c80c43d0f2ed0b11b/37.8267,-122.4233

module.exports = {
    getWeather
};