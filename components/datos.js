import React, { useState } from 'react';

function Datos({titulo, espesor, costo, costoTotal, cimbrado, ejecucion}) {
  return (
    <div>
      <div>
        <h2><span class="lnr lnr-arrow-right"></span> {titulo}</h2>
        <hr />
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> ESPESOR LOSA</p>
          <p>{espesor} cm</p>
        </div>
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> COSTO</p>
          <p>$ {costo} mt<sup>2</sup></p>
        </div>
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> COSTO TOTAL</p>
          <p>$ {costoTotal}</p>
        </div>
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> CIMBRADO</p>
          <p>{cimbrado} JOR</p>
        </div>
        <div className="datos">
          <p className="esp"><span className="lnr lnr-arrow-right"></span> EJECUCIÓN TOTAL</p>
          <p>{ejecucion} JOR</p>
        </div>
        <div className="datos">
          <p className="esp"><span class="lnr lnr-plus-circle"></span> JOR = Jornada de trabajo<br /><span class="lnr lnr-plus-circle"></span> 1 Carpintero y 1 Ayudante</p>
        </div>
      </div>
    </div>
  )
}

export default Datos;