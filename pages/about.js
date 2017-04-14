import React from 'react'
import Head from 'next/head'
import axios from 'axios'

import Page from '../components/page'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      page: [],
    }
  }

  componentDidMount() {
    axios.get(API_URL + 'about')
    .then(response => {
      console.log(response)
      const page = response.data[0]
      console.log(page)
      this.setState({ page })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    console.log(this.state.page)
    return (
      <div>
        <Head>
          <title>{this.state.page.title}</title>
        </Head>
        <Page />
      </div>
    )
  }
}
