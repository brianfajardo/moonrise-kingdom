import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import authenticated from './auth_reducer'
import loginError from './loginError_reducer'

const rootReducer = combineReducers({
  form,
  authenticated,
  loginError
})

export default rootReducer