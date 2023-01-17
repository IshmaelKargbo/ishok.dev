import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { store } from '../redux';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <NextSeo
          title="Ishmael Kargbo"
          description="Full-stack developer from Sierra Leone"
        />
        <title>Ishmael Kargbo</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;