import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../../style/components/NavButton.module.scss'


const NavButton = ({ title = 'Get Started!', to = '/' } ) => {
  return (
    <div className={classes.Button}>
      <NavLink to={to} className={classes.button__link}>{title}</NavLink>
    </div>
  )
}

export default NavButton
