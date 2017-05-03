import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/'

class SecretDiscount extends Component {
  componentWillMount() {
    this.props.fetchSecretCode()
  }

  render() {
    return (
      <h3>{this.props.secretCode}</h3>
    )
  }
}

const mapStateToProps = state => ({
  secretCode: state.auth.secret
})

export default connect(mapStateToProps, actions)(SecretDiscount)