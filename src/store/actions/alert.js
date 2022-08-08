import { HIDE_ALERT, SHOW_ALERT } from './actionTypes'


export const hideAlert = () => {
  return {
    type: HIDE_ALERT
  }
}

export const showAlert = (text) => {
  return {
    type: SHOW_ALERT,
    text
  }
}
