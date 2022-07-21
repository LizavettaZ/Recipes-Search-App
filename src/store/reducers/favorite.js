import { ADD_FAVORITE_RECIPE, GET_FAVORITE_RECIPES } from '../actions/actionTypes'


const initialState = {
  favorite: []
}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_RECIPE:
      return { ...state, favorite: [...state.favorite, action.recipe] }
    case GET_FAVORITE_RECIPES:
      return { ...state, favorite: [...action.recipes] }
    default:
      return state
  }
}