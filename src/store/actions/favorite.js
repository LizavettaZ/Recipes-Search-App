import { ADD_FAVORITE_RECIPE, GET_FAVORITE_RECIPES } from './actionTypes'
import axios from '../../API/favorite'


export const postFavorite = (recipe) => {
  const id = localStorage.getItem('userId')

  return async dispatch => {
    try {
      await axios.post(`/${id}.json`, recipe)
    }
    catch (e) {
      console.log(e)
    }
  }
}

export const getFavorite = (id) => {
  return async dispatch => {
    try {
      const response = await axios.get(`/${id}.json`)

      dispatch(getFavoriteRecipes(Object.values(response.data)))
    }
    catch (e) {
      console.log(e)
    }
  }
}

export const saveRecipe = (recipe) => {
  return {
    type: ADD_FAVORITE_RECIPE,
    recipe: recipe
  }
}

const getFavoriteRecipes = (recipes) => {
  return {
    type: GET_FAVORITE_RECIPES,
    recipes: recipes
  }
}
