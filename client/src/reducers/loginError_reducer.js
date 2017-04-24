import { LOGIN_ERROR } from '../constants/actionTypes'

export default (state = null, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}