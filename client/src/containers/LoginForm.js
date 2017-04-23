import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class LoginForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            component="input"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component="input"
            type="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default reduxForm({ form: 'login' })(LoginForm)