import React from 'react';
import Themes_page from '../presentational/Themes_page.jsx';
import actions from '../../../actions.js';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        curTheme: state.curTheme,
        themeArr: state.themeArr
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        regThemeChange: (theme) => {
            dispatch(actions.changeTheme(theme));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Themes_page);
