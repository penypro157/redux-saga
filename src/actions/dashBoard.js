import * as actions from './../constants/index'

export const toggleSideBar = (position) => {
  return { type: actions.TOGGLE_SIDE_BAR, position }
}