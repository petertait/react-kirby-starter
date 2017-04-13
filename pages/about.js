import React from 'react'
import Head from 'next/head'

import Page from '../components/page'

export default class extends React.Component {

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
