import React from 'react'

import Header from '../containers/Header'

export default (props) =>
  <div>
    <Header />
    {props.children}
  </div>