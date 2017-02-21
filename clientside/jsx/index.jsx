import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../reducer.js';
import ipc_client from '../ipc_client.js';
import actions from '../actions.js';
import App_container from './components/container/App_container.jsx';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App_container/>
    </Provider>,
    document.getElementById('root')
);

ipc_client.getCurTheme().then((theme) => {
    store.dispatch(actions.changeTheme(theme));
}, (err) => {
    throw 'error while getting cur theme in init '+err;
});

ipc_client.getPlugins().then((plugins) => {
    store.dispatch(actions.updatePlugins(plugins));
}, (err) => {
    throw 'error while getting plugins in init '+err;
});
