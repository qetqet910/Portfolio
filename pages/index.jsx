import React, { useEffect, Suspense, useMemo, useRef } from 'react';
import ThreeTrain from '../public/script/three';

// import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import styles from '../styles/Home.module.scss'


const ToggleTheme = dynamic(() => import("../components/common/Theme"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <ToggleTheme />
      </header>
      <div className={styles.main}>
        <ThreeTrain />
      </div>
    </>
  )
}

export default Home