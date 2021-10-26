const yargs = require('yargs') 
const chalk = require('chalk')
const notes = require('./notes.js')
 
yargs.version('1.1.0') 
 
yargs.command({ 
    command: 'add', 
    describe: 'Adding a new note', 
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
    describe: 'Removing a note', 
    handler: function () { 
        console.log('Removing a new note!') 
    } 
}) 

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    
})

yargs.parse()

