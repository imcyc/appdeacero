import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Mapei.module.css'
import { TiArrowRight } from 'react-icons/ti';

export default function Home() {
  return (
    <Layout>

      <main className={styles.mapei}>
        <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '300px'}} />
        <h1 style={{margin: '0'}}>CALCULADORA DE LOSAS PARA VIVIENDA</h1>
        <hr/>
        <Link href="/deacero/formulario" className="mt-3">
          <a className={styles.btn}>
            COMENZAR A CALCULAR
          </a>
        </Link>
      </main>

    </Layout>
  )
}
