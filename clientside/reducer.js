import actionTypes from './actionTypes';
import actions from './actions';
import ipc_client from './ipc_client';

const initialState = {
    optionSelected: "themes",
    curTheme: '',
    plugins: []
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

        case actionTypes.UPDATE_PLUGINS:
            return Object.assign({}, state, {
                plugins: action.plugins
            });
            break;

        default:
            return state;
    }
};

export default reducer;
