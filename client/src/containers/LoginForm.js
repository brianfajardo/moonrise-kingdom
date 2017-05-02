import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Redirect } from 'react-router-dom'

import * as actions from '../actions/'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit({ email, password }) {
    this.props.userLogin({ email, password })
  }

  renderLoginError() {
    const { loginError } = this.props
    return (
      loginError
        ? <div className="alert alert-danger inline">
            <strong>Uh oh! </strong>{loginError}
          </div>
        : null
    )
  }

  render() {
    const { handleSubmit, authenticated } = this.props

    if (authenticated) {
      return <Redirect to='/protected' />
    }

    return (
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field
              name="email"
              placeholder="email"
              type="text"
              component="input"
            />
          </div>
          <div>
            <Field
              name="password"
              placeholder="password"
              type="password"
              component="input"
            />
          </div>
          {this.renderLoginError()}
          <button type="submit" className="btn btn-sm btn-primary">
            Login
        </button>
        </form>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  loginError: state.auth.error
})

// v6 redux-form first decorates component then is passed to connect HOC
LoginForm = reduxForm({ form: 'login' })(LoginForm)

export default connect(mapStateToProps, actions)(LoginForm)