import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import { siteConfig } from '../config/site';
import theme, { pestelColors } from '../theme/theme';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, CssBaseline as MuiCssBaseline, GlobalStyles, alpha } from '@mui/material';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{siteConfig.company.name} - {siteConfig.company.tagline}</title>
        <meta name="description" content={siteConfig.company.description} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <MuiCssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
