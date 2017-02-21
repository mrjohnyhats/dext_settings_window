import React from 'react';
import Themes_page from '../presentational/Themes_page.jsx';
import actions from '../../../actions.js';
import {connect} from 'react-redux';

const themesFromPlugins = (arr) => {
    let out = [];
    arr.forEach((pl) => {
        if(/-theme$/.test(pl)){
            out.push(pl);
        }
    });
    return out;
};

const mapStateToProps = (state, ownProps) => {
    return {
        curTheme: state.curTheme,
        themeArr: themesFromPlugins(state.plugins)
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
