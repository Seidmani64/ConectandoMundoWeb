const yargs = require('yargs') 
const chalk = require('chalk')
 
yargs.version('1.1.0') 
 
yargs.command({ 
    command: 'add', 
    describe: 'Add a new note', 
    builder: { 
    title: { 
    describe: 'Note title', 
    demandOption: true, 
    type: 'string' 
    }, 
    body: { 
    describe: 'Note body', 
    demandOption: true, 
    type: 'string' 
    } 
    }, 
    handler: function (argv) { 
    console.log('Title: ' + argv.title) 
    console.log('Body: ' + argv.body) 
    } 
    }) 

yargs.command({ 
    command: 'remove', 
    describe: 'Remove a new note', 
    handler: function () { 
        console.log('Removing a new note!') 
    } 
}) 

const book = { 
    title: 'Ego is the Enemy', 
    author: 'Ryan Holiday' 
    } 
    // Covert JavaScript object into JSON string 
    const bookJSON = JSON.stringify(book) 
    // Covert JSON string into object 
    const bookObject = JSON.parse(bookJSON) 
    console.log(bookObject.title) // Print: Ego is the Enemy 

yargs.parse()

