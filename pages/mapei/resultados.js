import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

function Resultados() {
  const router = useRouter()
  const area = router.query.area;
  const destino = router.query.destino;
  const claro = router.query.claro;
  const pconcreto = router.query.pconcreto;
  const pmalla = router.query.pmalla;
  const pvar = router.query.pvar;

  return (
    <Layout>
      <div className="resultados">
        <div className="header">
        <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '300px'}} />
          <h2>APP DE LOSAS PARA VIVIENDA</h2>
          <h3>LOSAS EN UNA DIRECCIÓN, SIMPLEMENTE APOYADAS</h3>
          <h2 className="naranja">RESULTADOS</h2>
        </div>
        <div className="layt">
          <div>
            <h1>RESULTADOS</h1>
          </div>
          <div>
            <h1>RESULTADOS</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resultados;