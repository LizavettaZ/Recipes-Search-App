import { GET_ERROR, GET_LINKS, GET_RECIPES, GET_RECIPES_MORE, NOT_FOUND, SET_LOADING } from './actionTypes'
import axios from 'axios'
import { API, app_id, app_key } from '../../API/API'


export const search = (value) => {
  return async dispatch => {
    dispatch(setLoading(true))
    try {
      const response = await axios.get(`${API}type=any&q=${value}&app_id=${app_id}&app_key=${app_key}`)

      dispatch(getRecipes(response.data.hits))

      response.data.count > 20 && dispatch(getLinks(response.data._links.next.href, true))

      !!response.data.count ? dispatch(notFoundAnime(false)) : dispatch(notFoundAnime(true))

      dispatch(setLoading(false))
    } catch (e) {
      dispatch(getError(e))
      dispatch(setLoading(false))
    }
  }
}

export const RecipesMore = (link) => {
  return async dispatch => {
    try {
      const response = await axios.get(link)

      dispatch(getRecipesMore(response.data.hits))
      response.data.count !== response.data.to
        ? dispatch(getLinks(response.data._links.next.href, true))
        : dispatch(getLinks(null, false))

    } catch (e) {
      dispatch(getError(e))
    }
  }
}

const setLoading = (payload) => {return { type: SET_LOADING, loading: payload }}

const notFoundAnime = (payload) => {return { type: NOT_FOUND, payload: payload }}

const getError = (e) => {
  return {
    type: GET_ERROR,
    error: e
  }
}

const getRecipes = (recipes) => {
  return {
    type: GET_RECIPES,
    recipes: recipes
  }
}

const getRecipesMore = (recipes) => {
  return {
    type: GET_RECIPES_MORE,
    nextRecipes: recipes
  }
}

const getLinks = (link, isMore) => {
  return {
    type: GET_LINKS,
    showMore: link,
    isMore: isMore
  }
}
