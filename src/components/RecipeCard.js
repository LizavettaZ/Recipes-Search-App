import React from 'react'
import classes from '../style/components/RecipeCard.module.scss'
import { Link } from 'react-router-dom'


const RecipeCard = ({ recipe }) => {
  const { label, images, ingredients, calories, cuisineType, totalWeight, totalTime } = recipe

  const info = [
    {Ingredients: ingredients.length},
    {Calories: calories.toFixed(0)},
    {gm: totalWeight.toFixed(0)}
  ]

  return (
    <div className={classes.RecipeCard}>
      <div className={classes.card}>
        <div className={classes.card__container}>
          <div className={classes.card__img}>
            <img src={images.REGULAR.url} alt='Food picture'/>
          </div>
          <Link to={'/recipe/:' + label} >
            <h3>{label}</h3>
          </Link>
        </div>
        <div className={classes.card__info}>
          { info.map((item, index) => (
            <div className={classes.card__text} key={Date.now() + index}>
              <h4>{Object.values(item)}</h4>
            <span>{Object.keys(item)}</span>
            </div>
          )) }
        </div>
     </div>
      <div className={classes.recipe__info}>
        <p><strong>{totalTime}</strong>&nbsp;min</p>
        <p>Cuisine:&nbsp;<strong>{cuisineType}</strong></p>
      </div>
    </div>
  )
}

export default RecipeCard
