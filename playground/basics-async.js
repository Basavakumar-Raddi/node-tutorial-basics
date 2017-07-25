console.log('starting app');

//we are registering the callabck to get executed after some time set in as second parameter 
setTimeout( () => {
    console.log('inside callback 2secs');
},2000);

//timeout of 0 seconds      
setTimeout( () => {
    console.log('inside callback 0ms');
},0);

console.log('finishing app');

/*d:\misc\Readings\node\node-tutorial-practice>node playground/basics-async.js
starting app
finishing app
inside callback 0ms
inside callback 2secs*/
