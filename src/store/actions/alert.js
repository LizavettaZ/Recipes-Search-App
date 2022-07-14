import { HIDE_ALERT, SHOW_ALERT } from './actionTypes'


export const hide = () => {return { type: HIDE_ALERT }}

export const show = (text) => {
  return {
    type: SHOW_ALERT,
    text
  }
}
