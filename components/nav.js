import React from 'react'
// import apiUrl from '../constants'
import Link from 'next/link'

const apiUrl = 'http://localhost:3000/api'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: []
    }
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(data => data.json())
      .then(data => {
        // console.log(data)
        this.setState({
          nav: data.data
        })

        console.log(this.state.nav)
    })
  }

  render() {
    const nav = this.state.nav
    const links = this.state.nav.map(function(link) {
      return (
        <li
          key={link.title}>
          <Link href={link.url}><a>{link.title}</a></Link>
        </li>
      )
    })
    return (
      <div>
        <h1>{links}</h1>
      </div>
    )
  }
}
