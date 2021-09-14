import 'assets/css/globals.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../src/theme';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import AOS from 'aos';
import '../src/services/i18n';
import 'aos/dist/aos.css';
import '../src/assets/css/globals.css';
import { CssBaseline } from '@material-ui/core';
import { useSyncI18nStatus } from '@/hooks/useSyncI18nStatus';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);
  useSyncI18nStatus();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="/assets/youland.png" />
        <title>Mortgages Simplified</title>
      </Head>

      <ThemeProvider theme={getTheme()}>
        <SnackbarProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
