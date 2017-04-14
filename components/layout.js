import React from 'react'
import Header from './header'
import axios from 'axios'

export default class Layout extends React.Component {
  constructor() {
    super()

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header title={this.props.title} ></Header>
        {this.props.children}
      </div>
    )
  }
}
