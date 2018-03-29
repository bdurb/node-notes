console.log('starting app.')

const fs = require('fs');
const _ = require('lodash');

const commant = process.argv[2];
const notes = require('./notes');

if (commant === 'add') {
  console.log('Adding new Note')
} else if (commant === 'list') {
  console.log('listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('command not recgonized');
}