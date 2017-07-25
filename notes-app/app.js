console.log('hello world');

const fs = require('fs'); 
const _ = require('lodash');
const yargs = require('yargs'); 

const myNotes = require('./notes.js');

//to run using arguments call on cmd prompt node app.js add/list
//command on cmd prompt
//node app.js add --title=secret --body="body of my secret note"

//const yargsArgv = yargs.argv;

const yargsArgv = yargs
    .command('add', 'add a new note', {
		title: {
			describe : 'title of note',
			demand : true,
			alias : 't'
		},
		body: {
			describe : 'body of note',
			demand : true,
			alias : 'b'
		}
	})
    .command('list', 'list note', {})
	.help()
	.argv;

/*console.log(process.argv);*/
//var command = process.argv[2];

console.log(yargsArgv);
/* o/p of above is 
{ _: [ 'add' ],
  title: 'secret',
  body: 'body of my secret note',
  '$0': 'app.js' }
*/
var command = yargsArgv._[0];
console.log('command passed : ',command);

if(command === 'add') {
    var retNote = myNotes.addNote(yargsArgv.title, yargsArgv.body);
    if(retNote ) {
        console.log('notes saved as ');
        console.log('Title : '+ retNote.title + ' body : '+retNote.body);
        
    } else {
        console.log('duplicate note');
    }
}else if(command === 'list') {
    var allNotes = myNotes.getAll();
    //using for-each to loop through array 
    allNotes.forEach((note) => console.log(note));
} else if(command === 'read') {
    myNotes.getNote(yargsArgv.title);
} else if(command === 'remove') {
    var retBoolean = myNotes.removeNote(yargsArgv.title);
    var message = retBoolean ? 'note was removed': 'note not found' ;
    console.log(message);
}else {
    console.log('command not entered');
}