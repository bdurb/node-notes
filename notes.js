console.log('starting notes');

var fs = require('fs');

const addNote = (title, body ) => {
  let notes = [];
  let note = {
    title,
    body
  };
  try {
    let noteString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(noteString);
  } catch (e) {

  }

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  } 
};

const getAll = () => {

};

const getNote = (title) => {

};

const removeNote = (title) => {

};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}