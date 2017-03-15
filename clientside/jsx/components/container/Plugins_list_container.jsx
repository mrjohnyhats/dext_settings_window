import {connect} from 'react-redux';
import actions from '../../../actions.js';
import Plugins_list from '../presentational/Plugins_list.jsx'
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

const Plugins_list_container = connect(mapStateToProps, mapDispatchToProps)(Plugins_list);

export default Plugins_list_container
