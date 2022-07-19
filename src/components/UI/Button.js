import React from 'react'
import classes from '../../style/components/Button.module.scss'


const Button = ({ children, ...props }) => {
  const cls = [
    classes.Button,
    classes[props.type]
  ]

  return (
    <button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >
      {children}
    </button>
  )
}

export default Button
