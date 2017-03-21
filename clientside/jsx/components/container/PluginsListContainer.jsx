import {connect} from 'react-redux';
import actions from '../../../actions.js';
import PluginsList from '../presentational/PluginsList.jsx'
import ipc_client from '../../../ipc_client.js'


const mapStateToProps = (state) => {
    return {
        plugins: state.plugins
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlugins: () => {
            ipc_client.getPlugins().then((plugins) => {
                dispatch(actions.updatePlugins(plugins));
            });
        }
    };
};

const PluginsListContainer = connect(mapStateToProps, mapDispatchToProps)(PluginsList);

export default PluginsListContainer
