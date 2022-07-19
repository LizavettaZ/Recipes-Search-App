import { OPEN_ABOUT, OPEN_AUTH, OPEN_HOME, OPEN_MY_RECIPES, OPEN_RECIPE, OPEN_SEARCH } from './actionTypes'


export const changeBg = (page) => {
  return dispatch => {
    switch (true) {
      case page === 'home':
        return dispatch (home())
      case page === 'about':
        return dispatch (about())
      case page === 'search':
        return dispatch (search())
      case page === 'myRecipes':
        return dispatch (myRecipes())
      case page === 'auth':
        return dispatch (auth())
      case page === 'recipe':
        return dispatch (recipe())
      default:
        return
    }
  }
}

const home = () => { return { type: OPEN_HOME }}
const about = () => { return { type: OPEN_ABOUT }}
const search = () => { return { type: OPEN_SEARCH }}
const myRecipes = () => { return { type: OPEN_MY_RECIPES }}
const auth = () => { return { type: OPEN_AUTH }}
const recipe = () => { return { type: OPEN_RECIPE }}