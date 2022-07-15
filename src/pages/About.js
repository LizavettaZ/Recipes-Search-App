import React, { useEffect }  from 'react'
import classes from '../style/pages/About.module.scss'
import Food from '../img/about/Group 32.png'
import SearchBar from '../img/about/search bar 1.png'
import { useDispatch } from 'react-redux'
import { changeBg } from '../store/actions/layout'


const About = () => {
  const dispatch = useDispatch()

  useEffect(() => {dispatch(changeBg('about'))}, [])

  return (
    <div className={classes.About}>
      <h3>How it works</h3>
      <div className={classes.about__step}>
        <div className={classes.step__img}>
          <img src={Food} alt="Food"/>
        </div>
          <p className={classes.step__text}>Enter your products</p>
      </div>
      <div className={classes.about__step}>
        <p className={classes.step__text}>Search for recipes</p>
        <div className={classes.step__img}>
          <img src={SearchBar} alt="Search bar"/>
        </div>
      </div>
      <div className={classes.about__step_last}>
        <p>Get Recommended Recipes</p>
      </div>
    </div>
  )
}

export default About
