import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../../styles/Mapei.module.css';
import { TiArrowRight } from 'react-icons/ti';

export default function Formulario() {

  const router = useRouter()

  const [carga, setCarga] = useState(170);

  const calcular = (e) => {
    e.preventDefault();
    localStorage.setItem('area', e.target.area.value);
    localStorage.setItem('destino', e.target.destino.value);
    localStorage.setItem('claro', e.target.claro.value);
    localStorage.setItem('pconcreto', e.target.pconcreto.value);
    localStorage.setItem('pmalla', e.target.pmalla.value);
    localStorage.setItem('pvar', e.target.pvar.value);

    router.push({
      pathname: "/deacero/resultados"
    })
  }

  const calcularCarga = (e) => {
    const laCarga = e.target.value;
    if(laCarga === "entrepiso"){
      setCarga(170)
    } else {
      setCarga(100)
    }
  }

  return (
    <Layout>
      <form onSubmit={calcular}>
      <main className={styles.mapei}>
        <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '300px'}} />
        <hr/>
        <p style={{ margin: '0', padding: '0'}}>CALCULADORA DE COSTOS PARA</p>
        <h2 style={{ marginTop: '0'}}>LOSAS EN UNA DIRECCIÓN, SIMPLEMENTE APOYADAS</h2>
        <hr/>
        <h1>PROPORCIONAR LOS SIGUIENTES DATOS</h1>
        <div className={styles.forma}>
          <hr/>
          <h3><TiArrowRight /> ÁREA:</h3>
          <input type="number" step="0.01" name="area" placeholder="Ingresar el Área en metros" />
          <h3><TiArrowRight /> DESTINO (CARGA VIVA <span className={styles.carga}>{carga}</span> kg/m<sup>2</sup>):</h3>
          <select name="destino" onChange={calcularCarga}>
            <option value="Entrepiso">ENTREPISO</option>
            <option value="Azotea">AZOTEA</option>
          </select>
          <h3><TiArrowRight /> LONGITUD DEL CLARO EN METROS:</h3>
          <select name="claro">
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
            <option value="5">5.5</option>
          </select>
        </div>
        <hr/>
        <h1>PRECIO DE LOS MATERIALES</h1>
        <div className={styles.forma}>
          <hr/>
          <h3><TiArrowRight /> CONCRETO:</h3>
          <input type="number" step="0.01" name="pconcreto" placeholder="Ingresar el precio en metros cúbicos, Ej. 1600" />
          <hr/>
          <h3><TiArrowRight /> MALLA SOLDADA 66-1010:</h3>
          <input type="number" step="0.01" name="pmalla" placeholder="Ingresar el precio en metros cuadrados, Ej. 23.70" />
          <hr/>
          <h3><TiArrowRight /> VAR G42:</h3>
          <input type="number" step="0.01" name="pvar" placeholder="Ingresar el precio de la VAR en kg., Ej. 15.40" />
        </div>
        <hr/>
        <button type="submit" className={styles.calcular}>CALCULAR RESULTADOS</button>
      </main>
      </form>
    </Layout>
  )
}
