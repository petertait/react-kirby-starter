import React from 'react'
// import apiUrl from '../constants'

const apiUrl = 'http://localhost:3000/spad/'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      site: [],
      pages: []
    }
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({
          site: data.content,
          pages: data.children
        })

        console.log(this.state.site)
        console.log(this.state.pages)
    })
  }

  render() {
    const site = this.state.site
    return (
      <div>
        <h1>{site.author}</h1>
      </div>
    )
  }
}
