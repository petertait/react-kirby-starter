import React from 'react'
// import apiUrl from '../constants'

const apiUrl = 'http://localhost:3000/about/api'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: []
    }
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({
          page: data[0]
        })

        console.log(this.state.page)
    })
  }

  render() {
    const page = this.state.page
    return (
      <div>
        <h1>{page.title}</h1>
      </div>
    )
  }
}
