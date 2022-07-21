import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.svg'
import classes from '../style/pages/NotFound.module.scss'


const NotFound = () => {
  return (
    <Link to={'/'} className={classes.NotFound}>
      <h1>Page not found</h1>
      <img src={Logo} alt="Re Logo"/>
      <p>Go to the Home</p>
    </Link>
  )
}

export default NotFound
