import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import reset from 'styles/reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
