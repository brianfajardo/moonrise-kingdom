import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Actions
import { AUTH_USER } from '../constants/actionTypes'

// Components
import Header from '../containers/Header'
import Welcome from '../containers/Welcome'
import LoginForm from '../containers/LoginForm'
import SignupForm from '../containers/SignupForm'
import RequireAuth from '../containers/RequireAuth'
import SecretDiscount from '../containers/SecretDiscount'
import Signout from './Signout'

export default () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/signup" component={SignupForm} />
        <Route path="/signin" component={LoginForm} />
        <Route path="/signout" component={Signout} />
        <Route path="/secretdiscount" component={RequireAuth(SecretDiscount)} />
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  </Router>