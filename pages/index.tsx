import React from 'react';
import styles from '../styles/Home.module.scss';
import LottieClick from '../public/lottie/module/lottie';

import Link from 'next/link';
import ToggleTheme from '../components/common/Theme';
import Image from 'next/image';
// import dynamic from "next/dynamic";

// const ToggleTheme = dynamic(() => import("../components/common/Theme"), {
//   ssr: false,
// });

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.innerHeader}>
          <Link href={"#"} id="asd">
            Portfolio
          </Link>
          <nav className={styles.nav}>
            <ul>
              <li><Link href={"#"}>About</Link></li>
              <li><Link href={"#"}>Education/Awards</Link></li>
              <li><Link href={"#"}>Skills</Link></li>
              <li><Link href={"#"}>Career</Link></li>
              <li><Link href={"#"}>Projects</Link></li>
              <li><Link href={"#"}>Contact</Link></li>
            </ul>
          </nav>
          <LottieClick changeTheme={undefined} />     
        </div>
      </header>
      <main className={styles.main}>
          
      </main>
    </>
  )
}

export default Home