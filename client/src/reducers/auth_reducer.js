import {
  AUTH_USER,
  DEAUTH_USER,
  LOGIN_ERROR
} from '../constants/actionTypes.js'

export default (state = false, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true }
    case DEAUTH_USER:
      return { ...state, authenticated: false }
    case LOGIN_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}