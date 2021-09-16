import * as actions from '../constants/index'
import { get } from '../Utils/ApiHandler'
import { showAlertMessage } from '../Utils/ToastHelper'
import * as service from './../apiService/TaskAPI'

export const fetchAllTaskRequest = (searchText) => {
  return (dispatch) => {
    dispatch(fetchAllTask());
  }
}
export const fetchAllTask = (param) => {
  return {
    type: actions.FETCH_TASK,
    param
  }
}
export const fetchAllSuccess = (tasks) => {
  return {
    type: actions.FETCH_TASK_SUCCESS,
    tasks
  }
}
export const fetchAllFail = () => {
  return {
    type: actions.FETCH_TASK_FAIL,
    tasks: []
  }
}
export const showLoading = () => {
  return {
    type: actions.SHOW_LOADING
  }
}

export const hideLoading = () => {
  return {
    type: actions.HIDE_LOADING
  }
}
export const filterSearch = (searchText) => {
  return {
    type: actions.FILTER_SEARCH,
    searchText
  }
}

export const filterSearchSuccess = (tasks) => {
  return {
    type: actions.FILTER_SEARCH_SUCCESS,
    tasks
  }
}

export const addTask = (task) => {
  debugger
  return {
    type: actions.ADD_TASK,
    task
  }
}
export const addTaskSuccess = (task) => {
  return {
    type: actions.ADD_TASK_SUCCESS,
    task
  }
}
export const addTaskFail = (task) => {
  return {
    type: actions.ADD_TASK_FAIL,
    task
  }
}