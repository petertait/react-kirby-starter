import React from 'react'
import Head from 'next/head'
import axios from 'axios'

import Page from '../components/page'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    axios.get(API_URL + 'search/home')
    .then(response => {
      const results = JSON.parse(response.data)
      console.log(results)
      this.setState({ results })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    const resultsArray = this.state.results
    const resultsLength = resultsArray.length;
    for (var i = 0; i < resultsLength; i++) {
      console.log(resultsArray[i]);
    }

    return (
      <div>
        <Head>
          <title>Search</title>

        </Head>
        <Page>
          <h2>{resultsLength} results found!</h2>
        </Page>
      </div>
    )
  }
}
