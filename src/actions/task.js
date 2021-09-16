import * as actions from './../constants/index'

export const toggleTaskForm = (open) => {
    return { type: actions.TOGGLE_TASK_FORM, open }
  }