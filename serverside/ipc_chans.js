const fs = require('fs');
module.exports = JSON.parse(fs.readFileSync(__dirname+'/../ipc_chans.json'));
