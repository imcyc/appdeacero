import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Datos from '../../components/datos'

let data = require('../../components/data.json');

function Resultados() {
  const router = useRouter()
  const area = router.query.area;
  const destino = router.query.destino;
  const claro = router.query.claro;
  const pconcreto = router.query.pconcreto;
  const pmalla = router.query.pmalla;
  const pvar = router.query.pvar;

  console.log(data);

  return (
    <Layout>
      <div className="resultados">
        <div className="header">
          <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '200px'}} />
          <h2>APP DE LOSAS PARA VIVIENDA</h2>
          <h3>LOSAS EN UNA DIRECCIÓN, SIMPLEMENTE APOYADAS</h3>
          <hr/>
          <h2 className="naranja">RESULTADOS</h2>
        </div>
        <div className="datos">
          <div>
            <h2><span className="lnr lnr-chevron-right"></span> ÁREA: {area} mt<sup>2</sup></h2>
            <h2><span className="lnr lnr-chevron-right"></span> DESTINO: {destino}</h2>
            <h2><span className="lnr lnr-chevron-right"></span> LONGITUD DE CLARO: {claro} mt.</h2>
          </div>
          <div>
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DEL CONCRETO: $ {pconcreto}</h2>
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DE LA MALLA SOLDADA: $ {pmalla}</h2>
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DE LA VARILLA G42: $ {pvar}</h2>
          </div>
        </div>
        <div className="layt">
          <Datos 
            titulo="VIG-BOV Alma Abierta"
            espesor="18"
            costo="534.30"
            costoTotal="26714.79"
          />
          <Datos 
            titulo="VIG-BOV Pretensada"
            espesor="18"
            costo="569.15"
            costoTotal="28457.52"
          />
        </div>
        <div className="layt dos">
          <Datos 
            titulo="LOSA SÓLIDA Y VAR. G42"
            espesor="15"
            costo="701.45"
            costoTotal="35072.67"
          />
          <Datos 
            titulo="LOSA ALIGERADA Y VAR. G42"
            espesor="15"
            costo="621.83"
            costoTotal="31091.56"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Resultados;