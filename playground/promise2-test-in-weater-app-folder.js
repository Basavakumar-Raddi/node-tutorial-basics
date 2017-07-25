//in this  we made changes to geocode method whic does not support promise to retrun promise
const request = require('request');

var geoCodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedUri = encodeURIComponent(address);
        request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}`,
                json: true 
            }, (error, response, body) => {
                if(error) { 
                    reject('unable to connect to google server');
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('unable to find the address');
                } else if(body.status === 'OK') {
                    resolve({
                        address : body.results[0].formatted_address,
                        lat : body.results[0].geometry.location.lat,
                        long : body.results[0].geometry.location.lng
                    }) 
                }
            }
        )
    });
};

geoCodeAddress('19146').then((result) => {
    console.log(result);
}, (errorMessage) => {
    console.log(errorMessage);
}); 