import React from 'react'
import Head from 'next/head'
import axios from 'axios'

import Page from '../components/page'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      site: [],
      navigation: [],
      home: [],
    }
  }

  componentDidMount() {
    axios.get(API_URL + 'api')
    .then(response => {
      const site = response.data.site[0]
      const navigation = response.data.navigation[0]
      const home = response.data.home[0]
      this.setState({
        site,
        navigation,
        home
      })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.state.site.title}</title>
        </Head>
        <Page>
          test
        </Page>
      </div>
    )
  }
}
