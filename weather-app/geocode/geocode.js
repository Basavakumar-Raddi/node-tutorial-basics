const request = require('request');

var geocodeAddress = (address, callback ) => {
    var encodedUri = encodeURIComponent(address);
    request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}`,
            json: true 
        }, (error, response, body) => {
            if(error) { //used for network connections etc
                //console.log('unable to connect to google server');
                callback('unable to connect to google server');
            } else if (body.status === 'ZERO_RESULTS') {
                //console.log('unable to find the address');
                callback('unable to find the address');
            } else if(body.status === 'OK') {
                /*console.log(`Address : ${body.results[0].formatted_address}`);
                console.log(`Latituded : ${body.results[0].geometry.location.lat}`);
                console.log(`Longitude : ${body.results[0].geometry.location.lng}`);*/
                callback(undefined, {
                    address : body.results[0].formatted_address,
                    lat : body.results[0].geometry.location.lat,
                    long : body.results[0].geometry.location.lng
                }) 
            }
        }
    )
};

//8f81f916e355323c80c43d0f2ed0b11b -- key for developer.forecast.io or https://darksky.net/dev/account
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//https://api.darksky.net/forecast/8f81f916e355323c80c43d0f2ed0b11b/37.8267,-122.4233

module.exports = {
    geocodeAddress
};
