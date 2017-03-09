import {ipcRenderer} from 'electron';
import ipc_chans from './ipc_chans.js';
import ipc_replies from './ipc_replies';

const installPlugin = (plName) => {
    return new Promise((resolve, reject) => {
        ipcRenderer.send(ipc_chans.INSTALL_PLUGIN, plName);
        ipcRenderer.once(ipc_chans.INSTALL_PLUGIN, (e, reply) => {
            if(reply == ipc_replies.SUCCESS){
                resolve();
            } else {
                reject(reply);
            }
        });
    });
};

const sendNotification = (msg) => {
    return new Promise((resolve, reject) => {
        ipcRenderer.send(ipc_chans.SEND_NOTIFICATION, msg);
        ipcRenderer.once(ipc_chans.SEND_NOTIFICATION, (e, reply) => {
            if(reply == ipc_replies.SUCCESS){
                resolve();
            } else {
                reject(reply);
            }
        });
    });
};

const getConfig = () => {
    return new Promise((resolve, reject) => {
        try{
            ipcRenderer.send(ipc_chans.GET_CONFIG);
            ipcRenderer.once(ipc_chans.GET_CONFIG, (e, reply, config) => {
                if(reply == ipc_replies.SUCCESS) resolve(config);
                else reject(reply);
            });
        } catch(err){
            reject(err.mesage);
        }
    });
}

const getPlugins = () => {
    return new Promise((resolve, reject) => {
        getConfig().then((config) => {
            resolve(config['plugins']);
        }, (err) => {
            reject(err);
        });
    });
}

const getCurTheme = () => {
    return new Promise((resolve, reject) => {
        getConfig().then((config) => {
            resolve(config['theme']);
        }, (err) => {
            reject(err.message);
        });
    });
}

const changeTheme = (theme) => {
    return new Promise((resolve, reject) => {
        ipcRenderer.send(ipc_chans.CHANGE_THEME, theme);
        ipcRenderer.once(ipc_chans.CHANGE_THEME, (e, reply) => {
            if(reply == ipc_replies.SUCCESS) resolve();
            else reject(reply);
        });
    });
};

const deletePlugin = (plugin) => {
    return new Promise((resolve, reject) => {
        ipcRenderer.send(ipc_chans.DELETE_PLUGIN, plugin);
        ipcRenderer.once(ipc_chans.DELETE_PLIGIN, (e, reply) => {
            if(reply == ipc_replies.SUCCESS) resolve();
            else reject(reply);
        });
    });
}

export default {
    installPlugin,
    sendNotification,
    getPlugins,
    getCurTheme,
    getConfig,
    changeTheme,
    deletePlugin
};
