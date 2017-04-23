import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

// Redux Dev Tools
const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())

export default configureStore