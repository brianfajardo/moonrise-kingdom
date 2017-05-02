import axios from 'axios'

import {
  AUTH_USER,
  DEAUTH_USER,
  LOGIN_ERROR
} from '../constants/actionTypes.js'

// Server API
const ROOT_URL = 'http://localhost:3000'

export const userLogin = ({ email, password }) => {
  console.log(email, password)
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('JWT', res.data.token)
      })
      .catch(err => {
        dispatch({
          type: LOGIN_ERROR,
          payload: 'Bad login request.'
        })
      })
  }
}

export const userLogout = () => {
  localStorage.removeItem('token')
  dispatch({ type: DEAUTH_USER })
  dispatch({ type: LOGIN_ERROR, payload: null })
}

export const clearLoginError = () => ({
  type: LOGIN_ERROR,
  payload: null
})