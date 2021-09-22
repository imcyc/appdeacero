import React, { useState } from 'react';
import losClaros from '../components/claros.json';

function Datos({titulo, clarox, costo, costoTotal, cimbrado, ejecucion}) {

  const elclarin = losClaros.filter((item) => item.seccion === titulo && item.claro === clarox).map(esp => esp.espesor);

  return (
    <div>
      <div>
        <h2><span className="lnr lnr-arrow-right"></span> {titulo}</h2>
        <hr />
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> ESPESOR LOSA:</p>
          <p>{elclarin} cm</p>
        </div>
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> COSTO:</p>
          <p>$ {costo} mt<sup>2</sup></p>
        </div>
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> COSTO TOTAL:</p>
          <p>$ {costoTotal}</p>
        </div>
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> CIMBRADO:</p>
          <p>{cimbrado} JOR</p>
        </div>
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> EJECUCIÓN TOTAL:</p>
          <p>{ejecucion} JOR</p>
        </div>
        {/* 
        <div className="datos">
          <p className="esp"><span className="lnr lnr-plus-circle"></span> JOR = Jornada de trabajo<br />
          <span className="lnr lnr-plus-circle"></span> 1 Carpintero y 1 Ayudante</p>
        </div>
        */}
      </div>
    </div>
  )
}

export default Datos;