
// the belwo is how a callback function is created and called 
var getUser = (id, callback) => {
    var user = {
        id : id,
        name: 'kumar'
    }
    callback(user);
}

getUser(31, (userObj) => {
    console.log(userObj)
})
