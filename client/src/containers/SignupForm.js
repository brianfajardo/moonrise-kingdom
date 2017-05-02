import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Button, Icon, Input } from 'semantic-ui-react'

import * as actions from '../actions/'

class SignupForm extends Component {
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

  render() {
    return (
      <div>
        <h3>Register an account with us!</h3>
        <form>
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
              icon="unlock"
              component={this.renderField}
            />
          </div>
          <div>
            <Field
              name="confirm password"
              placeholder="confirm password"
              type="password"
              icon="lock"
              component={this.renderField}
            />
          </div>
          <Button
            type='submit'
            color='blue'
            compact
          >
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

SignupForm = reduxForm({ form: 'signup' })(SignupForm)

export default SignupForm