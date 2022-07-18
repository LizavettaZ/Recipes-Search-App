import React, { useEffect } from 'react'
import classes from '../style/pages/Auth.module.scss'
import { changeBg } from '../store/actions/layout'
import { useDispatch } from 'react-redux'


const Auth = () => {
  const dispatch = useDispatch()

  useEffect(() => {dispatch(changeBg('auth'))}, [])

  return (
    <div className={classes.Auth}>
      Auth
    </div>
  )
}

export default Auth
