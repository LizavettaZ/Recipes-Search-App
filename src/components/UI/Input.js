import React from 'react'
import classes from '../../style/components/Input.module.scss'
import { isValid } from '../../utilities/InputValidation'


const Input = (props) => {
  const inputType = props.type || 'text'
  const htmlFor = `${inputType}-${Math.random()}`

  const cls =[
    classes.Input,
    isValid(props) ? classes.invalid : null
  ]

  return (

    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}><h3>{props.label}</h3></label>
      <input
        id={htmlFor}
        type={inputType}
        value={props.value}
        onChange={props.onChange}
        placeholder={`what’s your ${inputType}?` }
      >
        {props.text}
      </input>
      { isValid(props)
        ? <span>{ props.errorMessage || 'Enter correct data' }</span>
        : null }
    </div>
  )
}

export default Input