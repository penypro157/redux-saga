import * as actionTypes from "../constants/index";

const initialState = {
    open: false,
    initData: {
        name: "",
        status: 0
    }
}
export const TaskFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TASK_FORM: {
            state.open = action.open;
            return { ...state };
        }
        default: return { ...state };
    }
}