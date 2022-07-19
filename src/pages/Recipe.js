import React, { useEffect }  from 'react'
import { changeBg } from '../store/actions/layout'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import classes from '../style/pages/Recipe.module.scss'
import Checkbox from '../components/UI/Checkbox'
import Arrow from '../components/UI/Arrow'
import Save from '../img/icons/save.svg'
import { deleteRecipe, postFavorite, saveRecipe } from '../store/actions/favorite'


const Recipe = () => {
  const label = useParams().label.slice(1)
  const { recipe } = useSelector(state => state.search.recipes).find(item => item.recipe.label === label)
  const {calories, mealType, dishType, cuisineType, images, ingredientLines, source, totalTime, totalWeight, url} = recipe
  const dispatch = useDispatch()
  const favorite = useSelector(state => state.favorite.favorite)

  const params = [
    {min: totalTime},
    {calories: calories.toFixed(0)},
    {gm: totalWeight.toFixed(0)}
  ]

  const types = [
    {Cuisine: cuisineType},
    {Meal: mealType},
    {Dish: dishType}
  ]

  useEffect(() => {
    dispatch(changeBg('recipe'))
  }, [])

  const addFavorite = () => {

    if (favorite.find(item => item.label === recipe.label)) {
      const changedFavorite = favorite.filter(item => item.label !== recipe.label)
      console.log('Had')
      dispatch(deleteRecipe(changedFavorite))
    } else {
      console.log('add')
      dispatch(saveRecipe(recipe))
      dispatch(postFavorite(recipe))
    }
  }

  return (
    <div className={classes.Recipe}>
      <Link to={'/search'} className={classes.recipe__arrow}>
        <Arrow />
        back
      </Link>
      <div className={classes.recipe__first_part}>
        <div className={classes.first_part__img}>
          <img src={ images.LARGE ? images.LARGE.url : images.REGULAR.url } alt={label}/>
        </div>
        <div className={classes.first_part__info}>
          <h3>{label}</h3>
          <div className={classes.info__save}>
            <img
              src={Save}
              alt={Save}
              onClick={addFavorite}
            />
            <p>Save</p>
          </div>
          <div className={classes.info__params}>
            { params.map((item) => (
              !!Number(Object.values(item)) &&
              <p key={Date.now() + Object.values(item)}><span>{Object.values(item)}</span>&nbsp;{Object.keys(item)}</p>
            )) }
          </div>
          <div className={classes.info__types}>
            { types.map((item) => (
              <p key={Date.now() + Object.values(item)}><span>{Object.keys(item)}:&nbsp;</span>{Object.values(item)}</p>
            )) }
          </div>
        </div>
      </div>
      <div className={classes.recipe__second_part}>
        <div className={classes.second_part__ingredients}>
          <h3>Ingredients</h3>
          { ingredientLines.map((item, index) => (
            <p key={Date.now() + index}>
              <Checkbox value={item} index={index}/>
            </p>
          )) }
        </div>
        <div className={classes.second_part__preparation}>
          <h3>Preparation</h3>
          <a href={url} target="_blank" rel="noreferrer">
            {source}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Recipe
