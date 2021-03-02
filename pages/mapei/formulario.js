import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Mapei.module.css'
import { TiArrowRight } from 'react-icons/ti';

export default function Formulario() {
  return (
    <Layout>
      <form>
      <main className={styles.mapei}>
        <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '300px'}} />
        <hr/>
        <h2>LOSAS EN UNA DIRECCIÓN, SIMPLEMENTE APOYADAS</h2>
        <hr/>
        <h1>PROPORCIONAR LOS SIGUIENTES DATOS</h1>
        <div className={styles.forma}>
          <hr/>
          <h3><TiArrowRight /> ÁREA:</h3>
          <input type="number" placeholder="Ingresar el área en metros" />
          <h3><TiArrowRight /> DESTINO:</h3>
          <select>
            <option>ENTREPISO</option>
            <option>AZOTEA</option>
          </select>
          <h3><TiArrowRight /> LONGITUD DEL CLARO:</h3>
          <input type="number" placeholder="Ingresar la longitud del claro" />
        </div>
        <hr/>
        <h1>PRECIO DE LOS MATERIALES</h1>
        <div className={styles.forma}>
          <hr/>
          <h3><TiArrowRight /> CONCRETO:</h3>
          <input type="number" placeholder="Ingresar el precio en metros cúbicos, Ej. 1600" />
          <hr/>
          <h3><TiArrowRight /> MALLA SOLDADA 66-1010:</h3>
          <input type="number" placeholder="Ingresar el precio en metros cuadrados, Ej. 23.70" />
          <hr/>
          <h3><TiArrowRight /> VAR G42:</h3>
          <input type="number" placeholder="Ingresar el precio de la VAR en kg., Ej. 15.40" />
        </div>
        <hr/>
        <button type="submit" className={styles.calcular}>CALCULAR RESULTADOS</button>
      </main>
      </form>
    </Layout>
  )
}
