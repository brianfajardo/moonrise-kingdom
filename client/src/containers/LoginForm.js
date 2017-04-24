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
    console.log(email, password)
    this.props.userLogin({ email, password })

  }

  render() {
    const { handleSubmit, authenticated } = this.props

    return (
      <div>
        {authenticated
          ? <Redirect to='/protected' />
          : (
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
          )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated
})

// v6 redux-form first decorates component then is passed to connect HOC
LoginForm = reduxForm({ form: 'login' })(LoginForm)
export default connect(mapStateToProps, actions)(LoginForm)