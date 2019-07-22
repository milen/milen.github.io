import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import 'styles/global-styles';

export default class SiteDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
        <html>
            <Head>
                <meta charset="utf-8" />>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />>
                <meta name="description" content="" />>
                <meta name="author" content="Milen Georgiev" />>
                <title>Milen ponders on stuff ...</title>
                {styleTags}
            </Head>
            <body>
                <main className="root">
                    {main}
                </main>
                <NextScript />
            </body>
        </html>
    )
  }
}