import * as actionTypes from "../constants/index";

const initialState = {
    showLoading: false
};
export const UIReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADING: {
            state.showLoading = true;
            return { ...state };
        }
        case actionTypes.HIDE_LOADING: {
            state.showLoading = false;
            return { ...state };
        }
        default: return { ...state };
    }
}