//runnign the below progrma -- nodemon playground/arrow.js

var square = (x) => {
    var result = x*x;

    return result;
};

//or in short use as arrow expression if ponly one opertaion in curly braces
var square1 = (x) => x * x;

//or if you have only one paramenter to pass to function then you use without parenthesis as below
var square2 = x => x * x;

console.log(square(9));
console.log(square1(7));
console.log(square2(6));

var user = {
    name : "kumar",
    sayHi: () => {
        console.log(`Hi i am ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi i am ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt(1,2 );
















