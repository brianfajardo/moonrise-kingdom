import axios from 'axios'

import { AUTH_USER } from '../constants/actionTypes.js'

// Server API
const ROOT_URL = 'http://localhost:3000'

export const userLogin = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        console.log(res)
        dispatch({ type: AUTH_USER })
      })
      .catch(err => console.log(err))
  }
}