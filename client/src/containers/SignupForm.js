import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import * as actions from '../actions/'

class SignupForm extends Component {
  render() {
    return (
      <div>
        <h3>Register an account!</h3>
        <form>
          <div>
            <h4>Email</h4>
            <Field
              name="email"
              placeholder="email"
              type="text"
              component="input"
            />
          </div>
        </form>
      </div>
    )
  }
}

SignupForm = reduxForm({ form: 'signup' })(SignupForm)

export default SignupForm