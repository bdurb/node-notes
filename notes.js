

var fs = require('fs');

const fetchNotes = () => {
  try {
    let noteString = fs.readFileSync('notes-data.json')
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body ) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } 
};

const getAll = () => {
  return fetchNotes();
};

const getNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title === title)
  return filteredNotes[0];
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
  console.log(`title: ${note.title}`)
  console.log(`body: ${note.body}`)
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}