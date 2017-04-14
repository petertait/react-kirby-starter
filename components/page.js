import React from 'react'
import Header from './header'
import Nav from './nav'

export default ({ children }) => (
  <div>
    <Header>
      <Nav />

    </Header>
    { children }
  </div>
)
