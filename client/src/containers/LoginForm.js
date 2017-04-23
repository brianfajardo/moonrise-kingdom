import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit({ email, password }) {
    console.log(email, password)
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

export default reduxForm({ form: 'login' })(LoginForm)