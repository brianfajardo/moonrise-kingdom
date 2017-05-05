import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default (ComposedComponent) => {
  class Authentication extends Component {
    render() {
      const { authenticated } = this.props

      return (
        authenticated
          ? <ComposedComponent {...this.props} />
          : <Redirect to="/" />
      )
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
  })

  return connect(mapStateToProps)(Authentication)
}