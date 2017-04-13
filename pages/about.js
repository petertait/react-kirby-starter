import React from 'react'
import Head from 'next/head'

import Page from '../components/page'

export default class extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Head>
          <title>About</title>
        </Head>
        <Page />
      </div>
    )
  }
}
