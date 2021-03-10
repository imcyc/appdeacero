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
          <div>
            <h2><span class="lnr lnr-arrow-right"></span> VIG-BOV Alma Abierta</h2>
            <hr/>
            <div className="datos">
              <p className="esp">ESPESOR LOSA</p>
              <p>18 cm</p>
            </div>
            <div className="datos">
              <p className="esp">COSTO</p>
              <p>$ 534.30 mt<sup>2</sup></p>
            </div>
            <div className="datos">
              <p className="esp">COSTO TOTAL</p>
              <p>$ 26,714.79</p>
            </div>
            <div className="datos">
              <p className="esp">CIMBRADO</p>
              <p>1.6 JOR</p>
            </div>
            <div className="datos">
              <p className="esp">EJECUCIÓN TOTAL</p>
              <p>4.9 JOR</p>
            </div>
            <div className="datos">
              <p className="esp">JOR = Jornada de trabajo<br/>1 Carpintero y 1 Ayudante</p>
            </div>
          </div>
          <div>
            <h2><span class="lnr lnr-arrow-right"></span> VIG-BOV Pretensada</h2>
            <hr/>
          </div>
        </div>
        <div className="layt dos">
          <div>
            <h2><span class="lnr lnr-arrow-right"></span> LOSA SÓLIDA Y VAR. G42</h2>
            <hr/>
          </div>
          <div>
            <h2><span class="lnr lnr-arrow-right"></span> LOSA ALIGERADA Y VAR. G42</h2>
            <hr/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resultados;