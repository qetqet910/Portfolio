import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://introduceme.kr" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:image" content="../public/img/webdev.png" />
        <meta property="og:description" content="포트폴리오 웹 페이지" />
        <meta property="og:site_name" content="나를 소개합니다" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
