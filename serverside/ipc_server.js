const {ipcMain} = require('electron');
const ipc_chans = require('./ipc_chans');
const ipc_replies = require('./ipc_replies');
const dutils = require('dext-core-utils');
const notifier = require('node-notifier');

const getThemesFromPl = (plArr) => {
    let out = [];
    plArr.forEach((pl) => {
        if(/-theme$/.test(pl)){
            out.append(pl);
        }
    });
    return out;
}

module.exports = () => {
    ipcMain.on(ipc_chans.INSTALL_PLUGIN, (e, plName) => {
        dutils.api.install(plName, dutils.utils.paths.getPluginPath(plName)).then(() => {
            e.sender.send(ipc_chans.INSTALL_PLUGIN, ipc_replies.SUCCESS);
        }, (err) => {
            e.sender.send(ipc_chans.INSTALL_PLUGIN, err);
        });
    });

    ipcMain.on(ipc_chans.SEND_NOTIFICATION, (e, msg) => {
        try{
            notifier.notify(msg);
            e.sender.send(ipc_chans.SEND_NOTIFICATION, ipc_replies.SUCCESS);
        } catch(err){
            e.sender.send(ipc_chans.SEND_NOTIFICATION, err);
        }
    });

    ipcMain.on(ipc_chans.GET_CONFIG, (e) => {
        try{
            dutils.api.getConfig().then((config) => {
                e.sender.send(ipc_chans.GET_CONFIG, ipc_replies.SUCCESS, config);
            });
        } catch(err){
            e.sender.send(ipc_chans.GET_CONFIG, err);
        }
    });

    ipcMain.on(ipc_chans.CHANGE_THEME, (e, theme) => {
        try{
            dutils.api.setTheme(theme)
            e.sender.send(ipc_chans.CHANGE_THEME, ipc_replies.SUCCESS);
        } catch(err){
            e.sender.send(ipc_chans.CHANGE_THEME, err);
        }
    });

    ipcMain.on(ipc_chans.DELETE_PLUGIN, (e, plugin) => {
        try{
            dutils.api.uninstall(plugin, dutils.utils.path.getPluginPath(plugin)).then(() => {
                e.sender.send(ipc_chans.DELETE_PLUGIN, ipc_replies.SUCCESS);
            }, (err) => {
                e.sender.send(ipc_chans.DELETE_PLUGIN, err);
            });
        } catch(err) {
            e.sender.send(ipc_chans.DELETE_PLUGIN, err);
        }
    });
}
