import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { Button, Icon, Input } from 'semantic-ui-react'

import * as actions from '../actions/'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.clearLoginError()
  }

  onFormSubmit({ email, password }) {
    this.props.userLogin({ email, password })
  }

  renderField({ placeholder, type, icon, input }) {
    return (
      <Input
        iconPosition='left'
        placeholder={placeholder}
        type={type}
        {...input}
      >
        <Icon name={icon} />
        <input />
      </Input>
    )
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
      <div>
        <h3>Log into your account</h3>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field
              name="email"
              placeholder="email"
              type="text"
              icon="at"
              component={this.renderField}
            />
          </div>
          <div>
            <Field
              name="password"
              placeholder="password"
              type="password"
              icon="unlock alternate"
              component={this.renderField}
            />
          </div>
          {this.renderLoginError()}
          <Button
            type='submit'
            color='green'
            compact
          >
            Login
          </Button>
        </form>
      </div>
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