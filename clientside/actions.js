import actionTypes from './actionTypes';

const changeOpt = (optId) => {
    return {
        type: actionTypes.CHANGE_SELECTED_OPT,
        optionId: optId
    };
}

const changeTheme = (theme) => {
    return {
        type: actionTypes.CHANGE_THEME,
        theme: theme
    };
}

const updatePlugins = (arr) => {
    return {
        type: actionTypes.UPDATE_PLUGINS,
        plugins: arr
    };
}

export default {
    changeOpt,
    changeTheme,
    updatePlugins
};
