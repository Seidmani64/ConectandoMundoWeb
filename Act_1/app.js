const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'Adding new note',
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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'Removing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler() {
        notes.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'Reading note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()