import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../actions/'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'Redux Auth' }
    this.handleItemClick = this.handleItemClick.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
  }

  handleItemClick({ name }) {
    this.setState({ activeItem: name })
  }

  renderLogin() {
    const {
      authenticated,
      activeItem,
      userLogout } = this.props

    return (
      authenticated
        ? <Link to="/signin" onClick={userLogout}>
          <Menu.Item
            name='Logout'
            active={activeItem === 'Logout'}
            onClick={this.handleSubmit}
          >
            Logout
            </Menu.Item>
        </Link>
        : [
          <Link to="/signin" key={1}>
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            >
              Login
            </Menu.Item>
            </Link>
          , <Link to="/signup" key={2}>
            <Menu.Item
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              onClick={this.handleItemClick}
            >
              Sign Up
            </Menu.Item>
          </Link>
        ]
    )
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Link to="/">
          <Menu.Item
            name='Redux Auth'
            active={activeItem === 'Redux Auth'}
            onClick={this.handleItemClick}
          >
            Redux Auth
        </Menu.Item>
        </Link>
        {this.renderLogin()}
      </Menu>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps, actions)(Header)