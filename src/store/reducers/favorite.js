import { ADD_FAVORITE_RECIPE, GET_ERROR, GET_FAVORITE_RECIPES } from '../actions/actionTypes'


const initialState = {
  favorite: [],
  isError: false
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_RECIPE:
      return { ...state, favorite: [...state.favorite, action.recipe], isError: false }
    case GET_ERROR:
      return { ...state, isError: true }
    case GET_FAVORITE_RECIPES:
      return { ...state, favorite: [...action.recipes], isError: false }
    default:
      return state
  }
}