console.log('starting app.')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = process.argv[2];

if (commant === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (commant === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote();
} else {
  console.log('command not recgonized');
}