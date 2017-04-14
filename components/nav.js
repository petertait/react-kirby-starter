import React from 'react'
import Link from 'next/link'

export default class Nav extends React.Component {
  render() {
    return (
      <ul>
        {this.props.navigation.map(function(link) {
          <li key={link.title}>
            <Link href={link.url}><a>{link.title}</a></Link>
          </li>
        })}
      </ul>
    )
  }
}
