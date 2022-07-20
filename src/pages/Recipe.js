import React, { useEffect }  from 'react'
import { changeBg } from '../store/actions/layout'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import classes from '../style/pages/Recipe.module.scss'
import Checkbox from '../components/UI/Checkbox'
import Arrow from '../components/UI/Arrow'
import Save from '../components/Save'
import { useNavigate } from "react-router-dom"


const Recipe = () => {
  const label = useParams().label.slice(1)
  const { recipe } = useSelector(state => state.search.recipes).find(item => item.recipe.label === label)
  const isAuthenticated = useSelector(state => !!state.auth.token)
  const {calories, mealType, dishType, cuisineType, images, ingredientLines, source,
    totalTime, totalWeight, url, ingredients} = recipe
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const propsRecipe = {
    calories, mealType, dishType,
    cuisineType, images, ingredientLines,
    source, totalTime, totalWeight, url,
    label, ingredients
  }

  useEffect(() => {
    dispatch(changeBg('recipe'))
  }, [])

  return (
    <div className={classes.Recipe}>
      <button onClick={() => navigate(-1)} className={classes.recipe__arrow}>
        <Arrow />
        back
      </button>
      <div className={classes.recipe__first_part}>
        <div className={classes.first_part__img}>
          <img src={ images.LARGE ? images.LARGE.url : images.REGULAR.url } alt={label}/>
        </div>
        <div className={classes.first_part__info}>
          <h3>{label}</h3>
          {isAuthenticated && <Save recipe={propsRecipe}/>}
          <div className={classes.info__params}>
            { params.map((item) => (
              !!Number(Object.values(item)) &&
              <p key={Date.now() + Object.values(item)}>
                <span>{Object.values(item)}</span>
                &nbsp;{Object.keys(item)}
              </p>
            )) }
          </div>
          <div className={classes.info__types}>
            { types.map((item) => (
              <p key={Date.now() + Object.values(item)}>
                <span>{Object.keys(item)}:&nbsp;</span>
                {Object.values(item)}
              </p>
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
