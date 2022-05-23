import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ishmael Kargbo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
