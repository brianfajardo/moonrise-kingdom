import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

// Redux Dev Tools
const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())

export default configureStore