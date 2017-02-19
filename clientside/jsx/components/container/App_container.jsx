import {connect} from 'react-redux';
import App from '../presentational/App.jsx'

const mapStateToProps =  (state) => {
    return {
        optionSelected: state.optionSelected
    };
}

export default connect(mapStateToProps)(App);
