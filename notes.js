console.log('starting notes');

var fs = require('fs');

const addNote = (title, body ) => {
  const notes = [];
  const note = {
    title,
    body
  };

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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