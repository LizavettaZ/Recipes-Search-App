import { AUTH_LOGOUT, AUTH_SUCCESS, SAVE_USER_ID } from '../actions/actionTypes'


const initialState = {
  UserId: '',
  token: 0
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, token: action.token}
    case AUTH_LOGOUT:
      return {...state, token: 0}
    case SAVE_USER_ID:
      return {...state, UserId: action.id}
    default:
      return state
  }
}