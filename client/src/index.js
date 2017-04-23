import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers'
import configureStore from './store/configureStore'
import App from './components/App'
import LoginForm from './containers/LoginForm'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/signin" component={LoginForm} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))