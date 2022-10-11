import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Lottie from 'lottie-react'
import lot2 from '../public/lottie/lot2.json'
import Link from 'next/link'
import Head from 'next/head'

const Custom404: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ERROR 404</title>
            </Head>
            <Lottie className={styles.L404} animationData={lot2}></Lottie>
            <footer className={styles.link}>
                <Link href="/">Page Not Found</Link>
                <Link href="/">메인으로 돌아가기</Link>
            </footer>
        </div>
    )
}
  
export default Custom404