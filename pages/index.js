import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>

      <main className={styles.main}>
        <img src="/logo_imcyc.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '300px'}} />
        <h1>CALCULADORAS PARA LA CONSTRUCCIÓN</h1>  
      </main>

    </Layout>
  )
}
