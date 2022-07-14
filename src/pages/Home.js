import React from 'react'
import classes from '../style/pages/Home.module.scss'
import Button from '../components/UI/Button'
import Loader from '../components/UI/Loader'
import Picture from '../img/home/Group 31.png'

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.home__pictures}>
        <img src={Picture} alt="Food pictures"/>
      </div>
      <div className={classes.home__content}>
        <h3>Hi! Welcome to Reciperi!</h3>
        <p>We are a company dedicated to making healthy eating fun. </p>
        <Button/>
      </div>

      {/*<Loader/>*/}
    </div>
  )
}

export default Home
