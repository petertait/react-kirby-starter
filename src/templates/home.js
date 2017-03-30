import React from 'react';

const dataUrl = 'http://localhost:3000/spad/'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      site: []
    }
  }

  componentDidMount() {
    fetch(dataUrl)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(data => data.json())
      .then(data => {
        this.setState({
          site: data.content
        })

        console.log(this.state.site)
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
