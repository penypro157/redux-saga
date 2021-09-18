export const Status = [{
    label: "READY",
    value: 0
},
{
    label: "IN PROGRESS",
    value: 1
},
{
    label: "COMPLETED",
    value: 2
},]
export const MessageType = {
    WARNING: "WARNING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    INFO: "INFO",
}
export const ButtonType = {
    CANCEL: "CANCEL",
    SAVE: "SAVE",
    AGREE: "AGREE",
    DISAGREE: "DISAGREE",
}
export const MESSAGE_CONFIRM = {
    DELETE: `Do you want to delete !!!`,
    DELETE_CUSTOM: (customLabel) => {
        return `Do you want to delete ${customLabel} !!!`
    }

}
export const MESSAGE_TITLE = {
    DELETE_TASK: `DELETE TASK`

}

export const API_URL = 'https://6132ff7bab7b1e001799b603.mockapi.io'
export const TOGGLE_TASK_FORM = 'TOGGLE_TASK_FORM'
export const FETCH_TASK = 'FETCH_TASK'
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS'
export const FETCH_TASK_FAIL = 'FETCH_TASK_FAIL'
export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'
export const FILTER_SEARCH = 'FILTER_SEARCH'
export const FILTER_SEARCH_SUCCESS = 'FILTER_SEARCH_SUCCESS'
export const ADD_TASK = 'ADD_TASK'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'
export const ADD_TASK_FAIL = 'ADD_TASK_FAIL'
export const UPDATE_TASK = 'UPDATE_TASK'
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS'
export const UPDATE_TASK_FAIL = 'UPDATE_TASK_FAIL'
export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'
export const DELETE_TASK_FAIL = 'DELETE_TASK_FAIL'
export const EIDT_INIT_TASK_FORM = 'EIDT_INIT_TASK_FORM'
export const RESET_TASK_FORM = 'RESET_TASK_FORM'
