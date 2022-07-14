import React, { Fragment, memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import classes from '../../../style/components/Menu.module.scss'
import Logo from '../../../img/Logo.png'
import User from '../../../img/icons/user.png'


const NavMenu = () => {
  const [menuActive, setMenuActive] = useState(false)

  const cls = [
    classes.NavMenu_list,
    menuActive && classes.active
  ]

  const onClose = () => setMenuActive(false)
  
  // const isSelected = (event) => {
  //   const target = event.target.closest('.Menu_list__item__UbYEK')
  // }

  return (
    <Fragment>
      <nav className={classes.NavMenu}>
        <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive}/>
        <ul className={cls.join(' ')} onClick={onClose}>
          <li className={classes.list__item}>
            <NavLink to="/about"> about </NavLink>
          </li>
          <li className={classes.list__item}>
            <NavLink to= "/search"> search </NavLink>
          </li>
          <li className={classes.list__item}>
            <NavLink to = "/my recipes"> my recipes </NavLink>
          </li>
        </ul>
        <div className={classes.NavMenu__icons}>
          <NavLink to="/">
            <img src={Logo} alt="Ri"/>
          </NavLink>
          <NavLink to= "/profile" className={classes.list__item}>
            <img src={User} alt="Personal Area"/>
          </NavLink>
        </div>
      </nav>
    </Fragment>
  )
}

export default memo(NavMenu)
