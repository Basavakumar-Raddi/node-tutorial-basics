const express = require('express');
//adding hbs - handle bar package for templating wher we can have place holdders in html for varaibles
const hbs = require('hbs');

var app = express();

//as each page will have headders and footers and when number of pages grow 
//including header/footer in each page is tedious so we have partials in hbs as below
//in html user as "{{> footer }}"
hbs.registerPartials(__dirname + '/views/partials'); 

//to get the reepasted things in one place instead if all renderers/pages
//use the hbs helper
hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();
});
//to capitalize applied in home.hbs for welcome message 
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

//here we are setting the view engine as hbs
app.set('view engine', 'hbs');

//here we are using express middleware "app.use"
//this static function takes the argument path of folder where you have your html files
//__dirname will always store the current project directory
app.use(express.static(__dirname + '/public'));
//usrl can be used as http://localhost:3000/help.html

//registering a middleware where we intercept the request and do some stuff before 
//calling next() which tells to proceed with the loading
//if we dont call next then the request will stop here and does nto go further 
app.use((req, res, next) => {
    var now = new Date().toString();
    //we can also write to file using fs as a log 
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

//setting up maintenance page 
//------- very important the express loads as seen in the sequence above,
//so we will always get maintenance page becacuse that is the last middleware her in this js and there is no call to next
//so whenever you are under maitenance uncomment the below it will sevre maitenance page and not other pages
/*app.use((req, res, next) => {
    res.render('maintenance.hbs');
});*/

//we also need to move the "app.use(express.static(__dirname + '/public'));" belwo maintenance app.use or else that will be visible 
//during maintenance 

//default url with send
/*app.get('/', (req, res) => {
    //res.send('Hello Express'); //-- content type html -- default
    res.send({
        name: 'kumar'
    }); 
});
*/

//default url with render and hbs
app.get('/', (req, res) => {
    res.render('home.hbs',{
        pagetTitle: 'home page',
        //currentYear: new Date().getFullYear(),
        welcome: 'Welcome Home guest'
    })
});



app.get('/about', (req, res) => {
    //express by defualt reads the views folder and we call the render function for this
    res.render('about.hbs',{
        pagetTitle: 'about page'
        //currentYear: new Date().getFullYear()
    })
});


app.listen(3000, () => {
    console.log('server stated on port : 3000')
});