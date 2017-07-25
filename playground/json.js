//testing json object to string
/*var obj = {
    name: 'Kumar'
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj)
console.log(stringObj);*/

//testing string to object 
/*var personStr = '{"name":"kumar","age":25}';
var personObj = JSON.parse(personStr);
console.log(typeof personObj);
console.log(personObj.name);*/

const fs = require('fs');

var originalNoteObj = {
    title : 'some title',
    body: 'some Body'
}

var originalNotesStr = JSON.stringify(originalNoteObj); 
fs.writeFileSync('notes.json',originalNotesStr);

var noteStr = fs.readFileSync('notes.json');
var noteObjFormFile = JSON.parse(noteStr);

console.log(noteObjFormFile.title);
