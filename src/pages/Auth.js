import React, { useEffect, useState } from 'react'
import classes from '../style/pages/Auth.module.scss'
import { changeBg } from '../store/actions/layout'
import { useDispatch } from 'react-redux'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import { validateControl } from '../utilities/InputValidation'
import { auth } from '../store/actions/auth'


const submitHandler = (event) => {
  event.preventDefault()
}

const Auth = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState({
    value: '',
    type: 'email',
    label: 'Email',
    errorMessage: 'Enter correct email',
    valid: false,
    touched: false,
    validation: {
      required: true,
      email: true
    }
  })
  const [password, setPassword] = useState({
    value: '',
    type: 'password',
    label: 'Password',
    errorMessage: 'Enter correct password',
    valid: false,
    touched: false,
    validation: {
      required: true,
      minLength: 6
    }
  })

  useEffect(() => {dispatch(changeBg('auth'))}, [])

  const loginHandler =  () => {
    dispatch(auth(email.value, password.value, true))
  }

  const checkInHandler =  () => {
    dispatch(auth(email.value, password.value, false))
  }

  const onChangeHandler = (event, changingState) => {
    const stateForChange = {...changingState}

    stateForChange.value = event.target.value
    stateForChange.touched = true
    stateForChange.valid = validateControl(stateForChange.value, stateForChange.validation)

    stateForChange.type === 'email'
      ? setEmail(stateForChange)
      : setPassword(stateForChange)
  }

  return (
    <div className={classes.Auth}>
      <form onSubmit={submitHandler} className={classes.auth__form}>
        <div className={classes.form__inputs}>
          <Input
            label={email.label}
            type={email.type}
            value={email.value}
            valid={email.valid}
            touched={email.touched}
            errorMessage={email.errorMessage}
            shouldValidate={!!email.validation}
            onChange={event => onChangeHandler(event, email)}
          />
          <Input
            label= {password.label}
            type= {password.type}
            value={password.value}
            valid={password.valid}
            touched={password.touched}
            errorMessage={password.errorMessage}
            shouldValidate={!!password.validation}
            onChange={event => onChangeHandler(event, password)}
          />
        </div>
        <div className={classes.form__btns}>
          <Button
            type='success'
            onClick={loginHandler}
            disabled={!(password.valid && email.valid)}
          >
            Enter
          </Button>
          <Button
            type='primary'
            onClick={checkInHandler}
            disabled={!(password.valid && email.valid)}
          >
            Create Profile!
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Auth

