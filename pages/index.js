import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'
import Nav from '../components/nav'

export default () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header>
      <Nav />
    </Header>
  </div>
)
