import {connect} from 'react-redux';
import actions from '../../../actions.js';
import Plugins_list from '../presentational/Plugins_list.jsx'

const mapStateToProps = (state) => {
    return {
        plugins: state.plugins
    };
};


const Plugins_list_container = connect(mapStateToProps)(Plugins_list);

export default Plugins_list_container
