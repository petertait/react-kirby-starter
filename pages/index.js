import React from 'react'
import Head from 'next/head'
import axios from 'axios'

import Page from '../components/page'

export default class extends React.Component {
  static async getInitialProps () {
    if(!process.browser) {
      const res = await axios.get(API_URL)
      return {data: res.data}
    } else {
      return {data: JSON.parse(sessionStorage.getItem('bpl'))}
    }
  }

  componentDidMount () {
    if(!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', JSON.stringify(this.props.data))
    console.log(this.props.data)
  }

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Page />
      </div>
    )
  }
}
