import {
  SIGNUP_USER,
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR
} from '../constants/actionTypes.js'

export default (state = false, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' }
    case DEAUTH_USER:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}