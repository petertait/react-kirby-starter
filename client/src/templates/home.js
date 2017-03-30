import React from 'react';

const dataUrl = 'http://localhost:3000/spad/'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
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
          data: data
        })
      })
  }

  render() {
    console.log(this.state.data)

    return (
      <div>
        <h1>{this.state.data.author}</h1>
      </div>
    )
  }
}
