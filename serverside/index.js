const electron = require('electron');
const utils = require('dext-core-utils');
const {app, BrowserWindow, ipcMain} = electron;
const ipc_server = require('./ipc_server');

let win;

const createWin = () => {
	win = new BrowserWindow({width: 900, height: 675, title: 'Settings'});
	win.show();
	win.loadURL('file://'+__dirname+'/../clientside/index.html');
}

const init = () => {
	createWin();
	ipc_server();
}

app.on('ready', init);
