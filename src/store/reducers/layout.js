import { OPEN_HOME, OPEN_ABOUT, OPEN_SEARCH, OPEN_MY_RECIPES, OPEN_AUTH } from '../actions/actionTypes'


const initialState = {
  background: '#E9FAFF',
}

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_HOME:
      return {...state, background: '#E9FAFF'}
    case OPEN_ABOUT:
      return {...state, background: '#E9FAFF'}
    case OPEN_SEARCH:
      return {...state, background: '#FFFDFA'}
    case OPEN_MY_RECIPES:
      return {...state, background: '#FFFAFF'}
    case OPEN_AUTH:
      return {...state, background: '#FFFFFF'}
    default:
      return state
  }
}