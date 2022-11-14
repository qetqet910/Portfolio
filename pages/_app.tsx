import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import getLayout from '.'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
