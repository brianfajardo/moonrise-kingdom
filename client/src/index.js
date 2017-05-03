import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App'
import Welcome from './components/Welcome'
import LoginForm from './containers/LoginForm'
import SignupForm from './containers/SignupForm'
import Signout from './components/Signout'
import SecretDiscount from './components/SecretDiscount'
import RequireAuth from './components/RequireAuth'

import configureStore from './store/configureStore'
import reducers from './reducers'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Welcome} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/signin" component={LoginForm} />
        <Route path="/signout" component={Signout} />
        <Route path="/secretdiscount" component={RequireAuth(SecretDiscount)} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'))