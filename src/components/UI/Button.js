import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../../style/components/Button.module.scss'


const Button = ({ title = 'Get Started!', to = '/' } ) => {
  return (
    <div className={classes.Button}>
      <NavLink to={to} className={classes.button__link}>{title}</NavLink>
    </div>
  )
}

export default Button
