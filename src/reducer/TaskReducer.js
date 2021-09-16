import * as actionTypes from "../constants/index";

const initialState = [];
export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TASK_SUCCESS: {
            return [...action.tasks];
        }
        case actionTypes.FILTER_SEARCH_SUCCESS: {
            return [...action.tasks];
        }
        case actionTypes.ADD_TASK: {
            return [action.task].concat([...state])
        }
        case actionTypes.ADD_TASK_FAIL: {
            var tasks = state.filter(item => item.name !== action.task.name);
            return [...tasks];
        }
        default: return [...state];
    }
}