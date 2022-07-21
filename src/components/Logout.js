import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../store/actions/auth'
import LogoutImg from '../img/icons/logout.svg'


const Logout = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch((logout()))
    navigate('/')
  }

  return (
    <NavLink to="/" className={props.class} onClick={onClick}>
      <img src={LogoutImg} alt="Logout"/>
    </NavLink>
  )
}

export default Logout
