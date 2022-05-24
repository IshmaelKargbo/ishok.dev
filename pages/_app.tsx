import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import { NextSeo } from 'next-seo';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <NextSeo
          title="Ishmael Kargbo"
          description="Full-stack developer from Sierra Leone"
        />
        <title>Ishmael Kargbo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
