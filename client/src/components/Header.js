import React from 'react'
import { Link } from 'react-router-dom'

export default () =>
  <nav className="navbar navbar-default">
    <a className="navbar-brand" href="/">Redux Authentication</a>
    <ul className="nav navbar-nav">
      <li className="active"><a href="/signin">Login</a></li>
      <li><a href="/signup">Sign Up</a></li>
    </ul>
  </nav>