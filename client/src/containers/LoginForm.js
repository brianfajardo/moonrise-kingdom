import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { Button, Icon, Input, Divider, Label } from 'semantic-ui-react'

import * as actions from '../actions/'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.clearLoginError()
  }

  onFormSubmit(formProps) {
    this.props.userLogin(formProps, () => this.props.history.push('/secretdiscount'))
  }

  renderField({ placeholder, type, icon, input, meta: { touched, error } }) {
    return (
      <div>
        <Input
          iconPosition='left'
          placeholder={placeholder}
          type={type}
          {...input}
        >
          <Icon name={icon} />
          <input />
          {touched && error
            ? <Label basic color='red' pointing='left'>{error}</Label>
            : null}
        </Input>
      </div>
    )
  }

  renderLoginError() {
    const { loginError } = this.props

    return (
      loginError
        ? <Label color='red'>Uh oh! {loginError}</Label>
        : null
    )
  }

  render() {
    const { handleSubmit, authenticated } = this.props

    // if (authenticated) {
    //   return <Redirect to='/' />
    // }

    return (
      <div>
        <h3>Login</h3>
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
          <Divider />
          <div>
            <Field
              name="password"
              placeholder="password"
              type="password"
              icon="unlock alternate"
              component={this.renderField}
            />
          </div>
          <Divider />
          <Button
            type='submit'
            color='green'
            compact
          >
            Login
          </Button>
          {this.renderLoginError()}
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Enter your password"
  }

  return errors
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  loginError: state.auth.error
})

// v6 redux-form first decorates component then is passed to connect HOC
LoginForm = reduxForm({ validate, form: 'login' })(LoginForm)

export default connect(mapStateToProps, actions)(LoginForm)