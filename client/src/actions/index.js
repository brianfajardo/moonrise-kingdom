import axios from 'axios'

import {
  AUTH_USER,
  LOGIN_ERROR
} from '../constants/actionTypes.js'

// Server API
const ROOT_URL = 'http://localhost:3000'

export const userLogin = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        console.log(res)
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