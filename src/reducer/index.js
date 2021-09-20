import { combineReducers } from "redux";
import { TaskFormReducer } from "./TaskFormReducer";
import { TaskReducer } from "./TaskReducer";
import { UIReducer } from "./UIReducer";
import { DashBoardReducer } from "./dashBoardReducer";
import { reducer as formReducer } from 'redux-form'

export const reducer = combineReducers({
    dashBoard: DashBoardReducer,
    taskForm: TaskFormReducer,
    tasks: TaskReducer,
    ui: UIReducer,
    form: formReducer,
});