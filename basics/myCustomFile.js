console.log('in my custom file');

//console.log(module);

module.exports.age = 30;

//we can use this old style where we use 'function' keyword or use the arrow style declaration as below ' 
//module.exports.myFunction = function() {}

module.exports.myFunction = () => {
    console.log('in function');
    return 'ret val of my function';
};

module.exports.testAddFunction = (val1, val2) => {
    return val1 + val2;
};
