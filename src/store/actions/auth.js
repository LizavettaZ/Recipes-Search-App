import axios from 'axios';
import { AUTH_LOGOUT, AUTH_SUCCESS, SAVE_USER_ID } from './actionTypes'

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

      console.log(response)
      console.log(response.data.localId)

      dispatch(saveUserId(response.data.localId))

      // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
      //
      // localStorage.setItem('token', response.data.idToken)
      // localStorage.setItem('userId', response.data.localId)
      // localStorage.setItem('expirationDate', expirationDate)
      //
      // dispatch(authSuccess(response.data.idToken))
      // dispatch(autoLogout(response.data.response.data.expiresIn))
    } catch (e) {
      console.log(e)
    }

  }
}

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    token
  }
}

export const autoLogout = (time) => {
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

const saveUserId = (id) => {
  return {
    type: SAVE_USER_ID,
    id: id
  }

}