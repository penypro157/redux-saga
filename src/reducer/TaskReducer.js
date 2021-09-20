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
            let tasks = state.filter(item => item.name !== action.task.name);
            return [...tasks];
        }
        case actionTypes.ADD_TASK_SUCCESS: {
            debugger
            state.forEach(item => {
                if (item.name === action.task.name && item.id === undefined) {
                    item.id = action.task.id;
                }
            });
            return [...state];
        }
        case actionTypes.UPDATE_TASK_SUCCESS: {
            state.forEach(item => {
                if (item.id === action.task.id) {
                    item.name = action.task.name;
                    item.description = action.task.description;
                    item.status = action.task.status;
                }
            });
            return [...state];
        }
        case actionTypes.DELETE_TASK_SUCCESS: {
            let tasks = state.filter(item => item.id !== action.id)
            return [...tasks];
        }
        default: return [...state];
    }
}