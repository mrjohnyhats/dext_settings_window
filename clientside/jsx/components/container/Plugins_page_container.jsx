import React from 'react';
import Plugins_page from '../presentational/Plugins_page.jsx';
import actions from '../../../actions.js';
import ipc_client from '../../../ipc_client.js'
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlugins: (theme) => {
            ipc_client.getPlugins().then((plugins) => {
                dispatch(actions.updatePlugins(plugins));
            });
        }
    };
};

export default connect(null, mapDispatchToProps)(Plugins_page);
