const express = require('express');

//this is required to get the express for calling the functions in express
var app = express();

//this is the method "get" for http get requests 
//also called as route
// the get method takes two arguemnts 1.route  2.method taking request and response objects ar parameters
app.get('/', (req, res) => {
    //res.send('Hello Express'); //-- content type html -- default
    res.send({
        name: 'kumar'
    }); // -- sends content type as json
});

//having another route
app.get('/about', (req, res) => {
    res.send('<h1> about page</h1>');
});

// for the app to listen when we hit the url in browser we need to call listen passing a port
app.listen(3000);