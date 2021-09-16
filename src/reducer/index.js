import { combineReducers } from "redux";
import { TaskFormReducer } from "./TaskFormReducer";
import { TaskReducer } from "./TaskReducer";
import { UIReducer } from "./UIReducer";
import { reducer as formReducer } from 'redux-form'

export const reducer = combineReducers({
    taskForm: TaskFormReducer,
    tasks: TaskReducer,
    ui: UIReducer,
    form: formReducer,
});