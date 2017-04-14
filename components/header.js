import React from 'react'

export default class Header extends React.Component {
  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul></ul>
      </div>
    )
  }
}