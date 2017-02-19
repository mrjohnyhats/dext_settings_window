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

const setThemeArr = (arr) => {
    return {
        type: actionTypes.SET_THEME_ARR,
        themeArr: arr
    };
}

const addThemeToArr = (theme) => {
    return {
        type: actionTypes.ADD_TO_THEME_ARR,
        theme: theme
    };
}

export default {
    changeOpt,
    changeTheme,
    setThemeArr,
    addThemeToArr
};
