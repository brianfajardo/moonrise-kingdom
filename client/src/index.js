import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import configureStore from './store/configureStore'

const store = configureStore()

// Automatically authenticate users with token
localStorage.getItem('token')
  ? store.dispatch({ type: AUTH_USER })
  : null

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))