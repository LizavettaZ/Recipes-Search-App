import React, { useEffect } from 'react'
import classes from '../style/pages/MyRecipes.module.scss'
import Loader from '../components/UI/Loader'
import RecipeCard from '../components/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import { changeBg } from '../store/actions/layout'

const MyRecipes = () => {
  const loading = useSelector(state => state.search.loading)
  const favorite = useSelector(state => state.favorite.favorite)
  const dispatch = useDispatch()

  useEffect(() => {dispatch(changeBg('myRecipes'))}, [])

  return (
    <div className={classes.MyRecipes}>
      <h2>My Recipes...</h2>
      { loading
        ? <Loader/>
        : <div className={classes.my_recipes__list}>
          {favorite.map((recipe, index) => (
            <div className = {classes.my_recipe} key = {Date.now() + index}>
              <RecipeCard
                recipe={recipe}
              />
            </div>
          )) }
        </div>
      }
    </div>
  )
}

export default MyRecipes
