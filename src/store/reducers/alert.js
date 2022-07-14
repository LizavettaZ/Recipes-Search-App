import { HIDE_ALERT, SHOW_ALERT } from '../actions/actionTypes'


const initialState = {
  text: '',
  active: false
}

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, text: action.text, active: true}
    case HIDE_ALERT:
      return {...state, active: false}
    default:
      return state
  }
}
