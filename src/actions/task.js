import * as actions from './../constants/index'

export const toggleTaskForm = (open) => {
  return { type: actions.TOGGLE_TASK_FORM, open }
}
export const editInitTaskForm = (initData) => {
  return { type: actions.EIDT_INIT_TASK_FORM, initData }
}
export const resetInitTaskForm = () => {
  return { type: actions.RESET_TASK_FORM }
}