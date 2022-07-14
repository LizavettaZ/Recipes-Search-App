import React, { memo } from 'react'
import classes from '../../../style/components/Alert.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { hide } from '../../../store/actions/alert'


const Alert = () => {
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()

  const cls = [
    classes.Alert,
    alert.active && classes.active
  ]

  return (
    <div className={cls.join(' ')} role="alert">
      {alert.text}
      <button type="button" className= {classes.btnClose} aria-label="Close" onClick={() => dispatch(hide())}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default memo(Alert)
