console.log('hello world');

const fs = require('fs'); //importing from node library
const os = require('os');
const myFile = require('./myCustomFile.js');
const _ = require('lodash'); // give the same name as package.json file and common pracice is lodash is given var name as underscore

/*var user = os.userInfo();

//basic testing of passing variable from another file or accessing the somem inbuilt func  and writing to file
fs.writeFile('./test.txt', 'test file ', function(err) {})
fs.appendFile('./test.txt', ' appended text. ', function(err) {});
fs.appendFile('./test.txt', ` Hello ${user.username} your age is ${myFile.age}`, function(err) {});*/

//testing for calling some custom function in naother file
/*var myFileReturnedVal = myFile.myFunction();
console.log(myFileReturnedVal);
*/
var addRetVal = myFile.testAddFunction(2,4);
console.log(addRetVal); 

console.log(_.isString("abc"));
console.log(_.isString(true));

var filtertedArray = _.uniq([2,3,4,6,2,3,5]);
console.log(filtertedArray);