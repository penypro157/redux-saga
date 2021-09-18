import * as actionTypes from "../constants/index";

const initialState = {
    open: false,
    initData: {
        id: '',
        name: '',
        description: '',
        status: 0
    }
}
export const TaskFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TASK_FORM: {
            state.open = action.open;
            return { ...state };
        }
        case actionTypes.EIDT_INIT_TASK_FORM: {
            state.initData = action.initData;
            return { ...state };
        }
        case actionTypes.RESET_TASK_FORM: {
            state.initData = {
                name: '',
                desc: '',
                status: 0
            }
            return { ...state };
        }
        default: return { ...state };
    }
}