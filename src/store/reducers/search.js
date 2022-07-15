import {
  NOT_FOUND,
  SET_LOADING,
  GET_ERROR,
  CLEAR_RECIPES,
  GET_RECIPES,
  GET_LINKS, GET_RECIPES_MORE
} from '../actions/actionTypes'


const initialState = {
  recipes: [],
  links: {},
  isLinks: false,
  loading: false,
  error: null,
  notFound: false
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.loading }
    case NOT_FOUND:
      return { ...state, notFound: action.payload }
    case GET_ERROR:
      return { ...state, error: action.error }
    case CLEAR_RECIPES:
      return { ...state, recipes: [] }
    case GET_RECIPES:
      return { ...state, recipes: action.recipes }
    case GET_RECIPES_MORE:
      return { ...state, recipes: [...state.recipes, action.recipes] }
    case GET_LINKS:
      return { ...state, links: action.link, isLinks: true }
    default:
      return state
  }
}
