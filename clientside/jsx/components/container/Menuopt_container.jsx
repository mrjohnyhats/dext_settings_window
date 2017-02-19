import {connect} from 'react-redux';
import actions from '../../../actions.js';
import Menuopt from '../presentational/Menuopt.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        selected: (state.optionSelected == ownProps.optId)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelected: (optId) => dispatch(actions.changeOpt(optId))
    }
}

const Menuopt_container = connect(mapStateToProps, mapDispatchToProps)(Menuopt);
export default Menuopt_container;
