import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { statusCode }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Error</title>
        </Head>
        <p>{
          this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'
        }</p>
      </div>
    )
  }
}