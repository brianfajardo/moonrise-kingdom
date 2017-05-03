import axios from 'axios'

import {
  SIGNUP_USER,
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR
} from '../constants/actionTypes.js'

// Server API
const ROOT_URL = 'http://localhost:3000'

export const userSignup = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', res.data.token)
      })
      // axios error handling
      // error.response.data.error
      .catch(({ response }) => {
        dispatch({
          type: AUTH_ERROR,
          payload: response.data.error
        })
      })
  }
}

export const userLogin = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        dispatch({
          type: AUTH_ERROR,
          payload: 'Bad login request.'
        })
      })
  }
}

export const userLogout = () => {
  localStorage.removeItem('token')
  dispatch({ type: DEAUTH_USER })
  dispatch({ type: AUTH_ERROR, payload: null })
}

export const clearLoginError = () => ({
  type: AUTH_ERROR,
  payload: null
})