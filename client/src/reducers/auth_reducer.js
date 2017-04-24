import { AUTH_USER } from '../constants/actionTypes.js'

export default (state = null, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true }
    default:
      return state
  }
}