import React from 'react';
import Plugins_page from '../presentational/Plugins_page.jsx';
import actions from '../../../actions.js';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        regNewTheme: (theme) => {
            dispatch(actions.addThemeToArr(theme));
        }
    };
};

export default connect(null, mapDispatchToProps)(Plugins_page);
