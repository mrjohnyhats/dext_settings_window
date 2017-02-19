import actionTypes from './actionTypes';
import actions from './actions';
import ipc_client from './ipc_client';

const initialState = {
    optionSelected: "themes",
    curTheme: '',
    themeArr: []
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CHANGE_SELECTED_OPT:
            return Object.assign({}, state, {
                optionSelected: action.optionId
            });
            break;

        case actionTypes.CHANGE_THEME:
            return Object.assign({}, state, {
                curTheme: action.theme
            });
            break;

        case actionTypes.SET_THEME_ARR:
            return Object.assign({}, state, {
                themeArr: action.themeArr
            });
            break;
        case actionTypes.ADD_TO_THEME_ARR:
            state.themeArr.push(action.theme);
            return state;

        default:
            return state;
    }
};

export default reducer;
