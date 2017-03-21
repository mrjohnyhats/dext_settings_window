import React from 'react';
import PluginsPage from '../presentational/PluginsPage.jsx';
import actions from '../../../actions.js';
import ipc_client from '../../../ipc_client.js'
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlugins: () => {
            ipc_client.getPlugins().then((plugins) => {
                dispatch(actions.updatePlugins(plugins));
            });
        }
    };
};

export default connect(null, mapDispatchToProps)(PluginsPage);
