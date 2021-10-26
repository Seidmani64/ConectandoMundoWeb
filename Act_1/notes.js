const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    const rawData = fs.readFileSync('notes.json')
    const dataJSON = rawData.toString()
    return JSON.parse(dataJSON)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    const allNotes = loadNotes()
    console.log(chalk.white.inverse('Notes'))
    allNotes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const allNotes = loadNotes()
    const note = allNotes.find((note) => note.title === title)
    if(note){
        console.log(chalk.white.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse('Note was not found.'))
    }
}

const addNote = (title,body) => {
    const allNotes = loadNotes()
    if(!(allNotes.find((note) => note.title === title))){
        allNotes.push({
            title: title,
            body: body
        })
        saveNotes(allNotes)
        console.log(chalk.green.inverse('Note added.'))
    }
    else{
        console.log(chalk.red.inverse('Title taken, try another.'))
    }
}

const removeNote = (title) => {
    const allNotes = loadNotes()
    const keptNotes = allNotes.filter((note) => note.title !== title)
    if(allNotes.length > keptNotes.length){
        console.log(chalk.green.inverse('Removed note.'))
        saveNotes(keptNotes)
    }
    else {
        console.log(chalk.red.inverse('Note was not found.'))
    }
}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    readNote: readNote,
    removeNote: removeNote
    
}