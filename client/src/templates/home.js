import React from 'react';

const dataUrl = 'http://localhost:3000/spad/'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(dataUrl)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        // console.log(response)
        return response
      })
      .then(data => data.json())
      .then(data => {

        this.setState({
          content: data
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    console.log(this.state.content)

    return (
      <div>
        Hey
      </div>
    )
  }
}
