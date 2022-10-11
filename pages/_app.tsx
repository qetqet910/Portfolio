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
        <meta property="og:image" content="https://raw.githubusercontent.com/qetqet910s/Portfolio/main/public/img/webdev.png?token=GHSAT0AAAAAABYHMZGSL7HXTYWDZIQLKSBYY2FAX3A" />
        <meta property="og:description" content="포트폴리오 웹 페이지" />
        <meta property="og:site_name" content="나를 소개합니다" />
        <meta property="og:locale" content="en_US" />
        <meta name="google-site-verification" content="Ob5_umWmcYNdwfKVKTefolDdu1q5zRMId7vGObwWosk" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
