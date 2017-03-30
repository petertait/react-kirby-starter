import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import Home from './templates/home'

injectGlobal(`
	@font-face {
	  font-family: 'Apercu';
	}

	body {
    font-family: 'Apercu';
		margin: 0;
	}
`)

ReactDOM.render(
  <injectGlobal>
    <Home />
  </injectGlobal>,
  document.getElementById('root')
)
