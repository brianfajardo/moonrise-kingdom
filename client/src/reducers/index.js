import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import authenticated from './auth_reducer'

const rootReducer = combineReducers({
  form,
  authenticated
})

export default rootReducer