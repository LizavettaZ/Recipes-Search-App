import React, { Fragment, memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import classes from '../../../style/components/Menu.module.scss'
import Logo from '../../../img/Logo.svg'
import User from '../../../img/icons/user.svg'
import { useSelector } from 'react-redux'
import Logout from '../../Logout'


const NavMenu = () => {
  const [menuActive, setMenuActive] = useState(false)
  const isAuthenticated = useSelector(state => !!state.auth.token)

  const cls = [
    classes.NavMenu_list,
    menuActive && classes.active
  ]

  const clsUser = [
    classes.list__item,
    isAuthenticated ? classes.auth : null
  ]

  const renderLinks = (links) => {
    return links.map((link, index) => {
      return (
        <li className={classes.list__item} key={index}>
          <NavLink to={link.to}>{link.label}</NavLink>
        </li>
      )
    })
  }

  const onClose = () => setMenuActive(false)

  const links = [
    {to:'/about', label: 'about'},
    {to:'/search', label: 'search'}
  ]

  if (isAuthenticated) {
    links.push({to:'/my_recipes', label: 'my recipes'})
  }

  return (
    <Fragment>
      <nav className={classes.NavMenu}>
        <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive}/>
        <ul className={cls.join(' ')} onClick={onClose}>
          { renderLinks(links) }
        </ul>
        <div className={classes.NavMenu__icons}>
          <NavLink to="/">
            <img src={Logo} alt="Ri"/>
          </NavLink>
          { isAuthenticated
            ? <Logout class={clsUser.join(' ')}/>
            : <NavLink to="/auth" className={clsUser.join(' ')}>
                <img src={User} alt="Login"/>
              </NavLink>
          }
        </div>
      </nav>
    </Fragment>
  )
}

export default memo(NavMenu)
