const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

//console.log(argv);

//calling callback chaining -- first geocode then weather
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined,2));
        console.log(`The address ${results.address} has : `);
        weather.getWeather(results.lat,results.long , (errorMessage, resultWeather) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`the temprature is ${resultWeather.temparature} and feels like ${resultWeather.apparentTemperature}`);
            } 
        });
    }
});

//sample input /output is 
/*d:\misc\Readings\node\node-tutorial-practice\weather-app>node app.js -a="1301 lombard street philadelphia"
{
  "address": "1301 Lombard St, Philadelphia, PA 19147, USA",
  "lat": 39.9444071,
  "long": -75.1631718
}
The address 1301 Lombard St, Philadelphia, PA 19147, USA has :
the temprature is 76.01 and feels like 77.29

d:\misc\Readings\node\node-tutorial-practice\weather-app>node app.js -a 08822
{
  "address": "Flemington, NJ 08822, USA",
  "lat": 40.5377063,
  "long": -74.8507131
}
The address Flemington, NJ 08822, USA has :
the temprature is 71.11 and feels like 72.37
*/




//calling in different file just the geo code =~ refactored code
/*geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined,2));
    }
});*/


//direct request to url
//var encodedUri = encodeURIComponent(argv.address);

/*request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true 
}, (error, response, body) => {
   //console.log('body:', JSON.stringify(body, undefined, 2));
   console.log(`Address : ${body.results[0].formatted_address}`);
   console.log(`Latituded : ${body.results[0].geometry.location.lat}`);
   console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
});*/

//using user input 
/*request({
    //url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv.address),
    //or
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}`,
    json: true 
}, (error, response, body) => {
   if(error) { //user for network conenctions etc
       console.log('unable to connect to google server');
   } else if (body.status === 'ZERO_RESULTS') {
       console.log('unable to find the address');
   } else if(body.status === 'OK') {
        console.log(`Address : ${body.results[0].formatted_address}`);
        console.log(`Latituded : ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
   }
   
});*/























