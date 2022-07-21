import { AUTH_LOGOUT, AUTH_SUCCESS } from '../actions/actionTypes'


const initialState = {
  token: 0
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, token: action.token }
    case AUTH_LOGOUT:
      return {...state, token: 0}
    default:
      return state
  }
}