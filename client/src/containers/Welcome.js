import React, { Component } from 'react'
import { connect } from 'react-redux'

class Welcome extends Component {
  render() {
    const { authenticated, userEmail } = this.props

    return (
      <div>
        {authenticated
          ? <div>
            <h3>Hello user with email: {userEmail}</h3>
            <h4>Check out the secret tab for your suprise! 😍 </h4>
          </div>
          : <h3>Login or sign up now to receive your early bird ticket discount! 🎫</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  userEmail: state.auth.email
})

export default connect(mapStateToProps)(Welcome)