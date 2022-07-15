import React, { useEffect } from 'react'
import classes from '../style/pages/Search.module.scss'
import SearchForm from '../components/SearchForm'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/UI/Loader'
import { changeBg } from '../store/actions/layout'
import RecipeCard from '../components/RecipeCard'


const Search = () => {
  const loading = useSelector(state => state.search.loading)
  const notFound = useSelector(state => state.search.notFound)
  const recipes = useSelector(state => state.search.recipes)
  const dispatch = useDispatch()

  useEffect(() => {dispatch(changeBg('search'))}, [])

  return (
    <div className={classes.Search}>
      <h3>Search for a recipe!</h3>
      <SearchForm/>
        { loading
          ? <Loader/>
          : <div className={classes.search__content}>
            { notFound
              ? <div>No found</div>
              : recipes.map((recipe, index) => (
                <div className = {classes.recipe} key = {Date.now() + index}>
                  <RecipeCard
                    recipe = {recipe.recipe}
                  />
                </div>
              )) }
          </div>
        }
    </div>
  )
}

export default Search
