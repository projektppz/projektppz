import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

        <Header />
        <Component {...pageProps} />
        <Footer />

    </>
  );
}

// eslint-disable-next-line import/no-default-export
export default MyApp;
