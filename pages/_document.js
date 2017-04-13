import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import { injectGlobal } from 'styled-components'

injectGlobal`
	@font-face {
	  font-family: 'Apercu';
	}

	body {
    font-family: 'Apercu';
		margin: 0;
	}
`;

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    )
    return { ...page, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>React CMS Boilerplate</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body>
          <injectGlobal>
            <Main />
            <NextScript />
          </injectGlobal>
        </body>
      </html>
    )
  }
}
