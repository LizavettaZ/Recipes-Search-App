import React from 'react'
import classes from '../../style/components/Loader.module.scss'
import Logo from '../../img/Logo.svg'


const Loader = () => {
  return (
    <div className={classes.Loader_container}>
      <img src={Logo} alt = "Logo"/>
      <div className={classes.Loader}>
        <div/><div/><div/><div/>
      </div>
    </div>
  )
}

export default Loader
