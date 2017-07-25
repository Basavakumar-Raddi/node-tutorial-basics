var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('the arguments are not number');
            }
        }, 1500);
    });
};

asyncAdd(2, 3).then((successMsg) => {
    console.log(successMsg);
}, (errorMessage) => {
    console.log(errorMessage);
});

//output is 
/*d:\misc\Readings\node\node-tutorial-practice>node playground/promise.js
5
Success:  Hey. It worked*/

//promise chaining 
asyncAdd(2, '5').then((result) => {
    console.log('Result is : ',result);
    return asyncAdd(result, 4);
}, (errorMessage) => {
    console.log(errorMessage);
}).then((succResult) => { //here we are chainig the promise. the then here is for this "return asyncAdd(result, 4);" call
    console.log('result should be 9 : ', succResult);
}, (errorMessage) => {
    console.log(errorMessage);
});
//ouput : 
/*d:\misc\Readings\node\node-tutorial-practice>node playground/promise.js
Result is :  5
result should be 9 :  9*/

// the above will fail in error scenario if the first call to asyncAdd failed suppose we pass asynAdd(2, '5')
//output asyncAdd(2, '5')
/*d:\misc\Readings\node\node-tutorial-practice>node playground/promise.js
the arguments are not number
result should be 9 :  undefined*/

//--- to overcome this we use the catch block and remove the error message callabck as below
 asyncAdd(2, '5').then((result) => {
    console.log('Result is : ',result);
    return asyncAdd(result, 4);
}).then((succResult) => { //here we are chainig the promise. the then here is for this "return asyncAdd(result, 4);" call
    console.log('result should be 9 : ', succResult);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
//output
/*d:\misc\Readings\node\node-tutorial-practice>node playground/promise.js
the arguments are not number*/



//------------------------------- very simple example 
// we are calling here a construtor of Promise just for demo 

/*var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked');
        reject('error occurred ');
    }, 2000);
    
});
*/

//the "then(callback1,callback2)" method takes two callback functions one for success(resolve) and the other for reject(error)

/*somePromise.then((message) => {
    console.log('Success: ', message);
    }, 
    (errorMessage) => {
        console.log('Error occured ',errorMessage);
    }
);*/

// either resolve or reject will be executed once which ever comes first. 
//Both will not execute no matter how many times you explicitly call these method
// so int he baove example it will always print 'Success'
//if you comment resolve call then 'error occurred' will get printed