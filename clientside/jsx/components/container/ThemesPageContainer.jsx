import React from 'react';
import ThemesPage from '../presentational/ThemesPage.jsx';
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

export default connect(mapStateToProps, mapDispatchToProps)(ThemesPage);
