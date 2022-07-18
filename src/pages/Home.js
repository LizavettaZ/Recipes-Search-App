import React, { useEffect } from 'react'
import classes from '../style/pages/Home.module.scss'
import Button from '../components/UI/Button'
import Picture from '../img/home/Group 31.png'
import { useDispatch } from 'react-redux'
import { changeBg } from '../store/actions/layout'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {dispatch(changeBg('about'))}, [])

  return (
    <div className={classes.Home}>
      <div className={classes.home__pictures}>
        <img src={Picture} alt="Food pictures"/>
      </div>
      <div className={classes.home__content}>
        <h3>Hi! Welcome to Reciperi!</h3>
        <p>We are a company dedicated to making healthy eating fun. </p>
        <Button
          to='/search'/>
      </div>
    </div>
  )
}

export default Home
