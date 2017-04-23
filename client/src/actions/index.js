import axios from 'axios'

// Server API
const ROOT_URL = 'http://localhost:3000'

export const userLogin = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
  }
}