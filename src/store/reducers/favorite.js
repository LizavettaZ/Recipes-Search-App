import { ADD_FAVORITE_RECIPE, DELETE_FAVORITE_RECIPE } from '../actions/actionTypes'


const initialState = {
  favorite: []
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_RECIPE:
      return { ...state, favorite: [...state.favorite, action.recipe] }
    case DELETE_FAVORITE_RECIPE:
      return { ...state, favorite: [...action.favorite] }
    default:
      return state
  }
}