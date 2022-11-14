import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Head from 'next/head'

export default function Layout({ children }:any) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://introduceme.kr" />
        <meta property="og:title" content="포트폴리오" />
        <meta property="og:image" content="https://chango.netlify.app/webdev1.png" />
        <meta property="og:site_name" content="최고의 개발자가 되길 원하며.." />
        <meta property="og:description" content="제 자신을 소개합니다 🎁" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary" /> 
        <meta property="twitter:site" content="포트폴리오" /> 
        <meta property="twitter:title" content="최고의 개발자가 되길 원하며.." /> 
        <meta property="twitter:description" content="제 자신을 소개합니다 🎁" /> 
        <meta property="twitter:image" content="https://chango.netlify.app/webdev1.png" /> 
        <meta property="twitter:url" content="https://introduceme.kr"/>
        <title>Introduce My Self</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Ob5_umWmcYNdwfKVKTefolDdu1q5zRMId7vGObwWosk" />
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));` }}></script>;
      </Head>
      <header className={styles.header}>
        <div className={styles.innerHeader}>
          <Link href={"/"} id="asd">
            Portfolio
          </Link>
          <nav className={styles.nav}>
            <ul>
              <li><Link href={"/About"}>About</Link></li>
              <li><Link href={"/Education"}>Education/Awards</Link></li>
              <li><Link href={"/Skills"}>Skills</Link></li>
              <li><Link href={"/Career"}>Career</Link></li>
              <li><Link href={"/Projects"}>Projects</Link></li>
              <li><Link href={"/Contact"}>Contact</Link></li>
            </ul>
          </nav>
          {/* <ModeToggle></ModeToggle> */}
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}