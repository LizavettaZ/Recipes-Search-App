import axios from 'axios'
import { AUTH_LOGOUT, AUTH_SUCCESS } from './actionTypes'
import { getFavorite } from './favorite'


const API = 'AIzaSyCb5gDF89FXWxUb5Qp6KXdBhWrkR2O-orY'

export const auth = (email, password, isLogin) => {
  return async dispatch => {
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='

    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
    }

    try {
      const response = await axios.post(url + `${API}`,
        {'email':`${email}`, 'password':`${password}`, 'returnSecureToken': true})

      dispatch(getFavorite(response.data.localId))

      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)

      localStorage.setItem('token', response.data.idToken)
      localStorage.setItem('userId', response.data.localId)
      localStorage.setItem('expirationDate', expirationDate)

      dispatch(authSuccess(response.data.idToken))
      dispatch(autoLogout(response.data.expiresIn))
    }
    catch (e) {
      console.log(e)
    }
  }
}

const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    token
  }
}

const autoLogout = (time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, time * 1000)
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')

  return{
    type: AUTH_LOGOUT
  }
}

export const authLogin = () => {
  return async dispatch => {
    const token = localStorage.getItem('token')
    const UserId = localStorage.getItem('userId')

    if (!token) {
      dispatch(logout())
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))

      if (expirationDate <= new Date()) {
        dispatch(logout())
      } else {
        dispatch(authSuccess(token))
        dispatch(getFavorite(UserId))
        autoLogout((expirationDate.getTime() - new Date().getTime() / 1000))
      }
    }
  }
}