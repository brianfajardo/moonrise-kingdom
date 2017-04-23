import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import * as actions from '../actions/'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit({ email, password }) {
    console.log(email, password)
    this.props.userLogin({ email, password })
  }

  render() {
    const { handleSubmit } = this.props

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
        <button type="submit" className="btn btn-sm btn-primary">
          Login
        </button>
      </form>
    )
  }
}

// v6 redux-form first decorates component
// then is passed to connect HOC
LoginForm = reduxForm({ form: 'login' })(LoginForm)
export default connect(null, actions)(LoginForm)