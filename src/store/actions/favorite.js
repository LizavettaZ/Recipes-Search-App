import { ADD_FAVORITE_RECIPE, DELETE_FAVORITE_RECIPE } from './actionTypes';
import axios from '../../API/favorite'

export const saveRecipe = (recipe) => {
  return {
    type: ADD_FAVORITE_RECIPE,
    recipe: recipe
  }
}

export const deleteRecipe = (recipes) => {
  return {
    type: DELETE_FAVORITE_RECIPE,
    favorite: recipes
  }
}

export const postFavorite = (recipe) => {
  return async (dispatch, getState) => {
    const a = getState().favorite.favorite
    const b = {
      calories: 1901.5611873500002,
      dietLabels: ['Low-Sodium']
    }
    console.log(b)

      await axios.post('https://search-recipes-app-default-rtdb.firebaseio.com/.json', b)
        .then(r => {
          console.log(r)
        })
        .catch(e => console.log(e))

  }
}
