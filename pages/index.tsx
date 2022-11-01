import React from 'react';

import dynamic from "next/dynamic";
import styles from '../styles/Home.module.scss'
import LottieClickEvent from '../public/lottie';

const ToggleTheme = dynamic(() => import("../components/common/Theme"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <ToggleTheme />
      </header>
      <main className={styles.main}>
        <LottieClickEvent />       
      </main>
    </>
  )
}

export default Home