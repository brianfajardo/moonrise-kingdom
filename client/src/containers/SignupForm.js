import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Button, Icon, Input, Divider, Label } from 'semantic-ui-react'

import * as actions from '../actions/'

class SignupForm extends Component {
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
        </Input>
        {touched && error
          ? <Label basic color='red' pointing='left'>{error}</Label>
          : null
        }
        <Divider />
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>Register an account with us!</h3>
        <form>
          <div>
            <Field
              label="email"
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
              name="confirmPassword"
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

// validate the inputs from the values object
// if errors returns an empty object, redux form assumes
// that the form is in the clear to submit

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Enter a password"
  } else if (values.password.length < 6) {
    errors.password = "For your security, please enter a password greater than 6 characters"
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password"
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match"
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'signup'
})(SignupForm)