import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

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
        <Header />
      </div>
    )
  }
}
