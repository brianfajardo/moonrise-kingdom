import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Actions
import { AUTH_USER } from './constants/actionTypes'

// Components
import Header from './containers/Header'
import Welcome from './containers/Welcome'
import LoginForm from './containers/LoginForm'
import SignupForm from './containers/SignupForm'
import RequireAuth from './containers/RequireAuth'
import SecretDiscount from './containers/SecretDiscount'
import Signout from './components/Signout'

// Store
import configureStore from './store/configureStore'
import reducers from './reducers'

const store = configureStore()

// Automatically authenticate users with token
const token = localStorage.getItem('token')
token ? store.dispatch({ type: AUTH_USER }) : null

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/signin" component={LoginForm} />
          <Route path="/signout" component={Signout} />
          <Route path="/secretdiscount" component={RequireAuth(SecretDiscount)} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'))