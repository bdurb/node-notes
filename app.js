console.log('starting app.')

const fs = require('fs');
const os = require('os');

const user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}!`);