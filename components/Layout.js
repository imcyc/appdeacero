import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>CALCULADORA EN LÍNEA | Calculadoras para la construcción</title>
        <link rel="shortcut icon" href="http://www.imcyc.com/wp-content/uploads/2017/07/favicon.png"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;700&display=swap" rel="stylesheet"></link>
      </Head>

      {children}

      <footer>
        <p><b>Instituto Mexicano del Cemento y del Concreto A.C.</b></p>
        <p><small>Av. Insurgentes Sur # 1846 Col. Florida, C.P. 01030, México, CDMX., (55) 5322 5740, imcyc@imcyc.com</small></p>
      </footer>
    </div>
  )
};