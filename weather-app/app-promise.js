const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch geo code for',
            string: true //always parse as string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress= encodeURIComponent(argv.address);
var geoUrl =  `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('unable to find that address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lng;
    var weatherUrl= `https://api.darksky.net/forecast/8f81f916e355323c80c43d0f2ed0b11b/${lat},${long}`;
    console.log(response.data.results[0].formatted_address);
    //calling to get using lat and long
    return axios.get(weatherUrl);
}).then((response) => { //this then for wetherurl
    var temperature = response.data.currently.temperature;
    console.log(`its curently : ${temperature}`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND') {
        console.log('Unable to connect ');
    } else {
        console.log(e.message);
    }
    
});

    

// sample input ouptput
/*d:\misc\Readings\node\node-tutorial-practice\weather-app>node app-promise.js -a '00000'
unable to find that address
*/

/*d:\misc\Readings\node\node-tutorial-practice\weather-app>node app-promise.js -a 19146
Philadelphia, PA 19146, USA
its curently : 75.1
*/