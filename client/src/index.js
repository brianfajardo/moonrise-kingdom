import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducers from './reducers'
import configureStore from './store/configureStore'
import App from './components/App'
import LoginForm from './containers/LoginForm'
import SignupForm from './containers/SignupForm'
import Signout from './components/Signout'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/signup" component={SignupForm} />
        <Route path="/signin" component={LoginForm} />
        <Route path="/signout" component={Signout} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'))