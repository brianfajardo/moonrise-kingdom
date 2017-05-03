import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../actions/'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'Redux Auth Party' }
    this.handleItemClick = this.handleItemClick.bind(this)
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
        ? [<Menu.Item
          as={Link}
          key={1}
          to="/secretdiscount"
          name='Secret Discount'
          active={activeItem === 'Secret Discount'}
          onClick={this.handleItemClick}
        >
        Secret Discount
        </Menu.Item>
          , <Menu.Item
            as={Link}
            to="/signout"
            key={2}
            name='Logout'
            active={activeItem === 'Logout'}
            onClick={userLogout}
          >
          Logout
        </Menu.Item>
        ]
        : [<Menu.Item
          as={Link}
          to="/signin"
          key={1}
          name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
        >
          Login
            </Menu.Item>
          , <Menu.Item
            as={Link}
            to="/signup"
            key={2}
            name='Sign Up'
            active={activeItem === 'Sign Up'}
            onClick={this.handleItemClick}
          >
          Sign Up
            </Menu.Item>
        ]
    )
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={Link}
          to="/"
          name='Redux Auth'
          active={activeItem === 'Redux Auth'}
          onClick={this.handleItemClick}
        >
          Redux Auth Party
        </Menu.Item>
        {this.renderLogin()}
      </Menu>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps, actions)(Header)