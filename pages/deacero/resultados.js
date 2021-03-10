import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Datos from '../../components/datos'

let data = require('../../components/data.json');

function Resultados() {
  const router = useRouter()
  const area = router.query.area;
  const destino = router.query.destino;
  const claro = Number(router.query.claro);
  const pconcreto = router.query.pconcreto;
  const pmalla = router.query.pmalla;
  const pvar = router.query.pvar;

  function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  console.log(claro);

  const VigBovAA = data.filter(dato => dato.tipo === "VigBovAA" && dato.longitud == claro && dato.destino === destino);

  const VigBovPretensada = data.filter(dato => dato.tipo === "VigBovPretensada" && dato.longitud == claro && dato.destino === destino);

  const LosaSolida = data.filter(dato => dato.tipo === "LosaSolida" && dato.longitud == claro && dato.destino === destino);

  const LosaAligerada = data.filter(dato => dato.tipo === "LosaAligerada" && dato.longitud == claro && dato.destino === destino);

  console.log("VigAA" + JSON.stringify(VigBovAA));

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
            bkg="uno"
            titulo="VIG-BOV Alma Abierta"
            espesor={VigBovAA[0].espesor}
            costo={VigBovAA[0].precio * 1.2}
            costoTotal={thousands_separators(((VigBovAA[0].precio * 1.2) * area).toFixed(2))}
            cimbrado="1.6"
            ejecucion="4.9"
          />
          <Datos 
            bkg="dos"
            titulo="VIG-BOV Pretensada"
            espesor={VigBovPretensada[0].espesor}
            costo={VigBovPretensada[0].precio * 1.2}
            costoTotal={thousands_separators(((VigBovPretensada[0].precio * 1.2) * area).toFixed(2))}
            cimbrado="1.6"
            ejecucion="5.2"
          />
        </div>
        <div className="layt dos">
          <Datos 
            bkg="tres"
            titulo="LOSA SÓLIDA Y VAR. G42"
            espesor={LosaSolida[0].espesor}
            costo={LosaSolida[0].precio * 1.2}
            costoTotal={thousands_separators(((LosaSolida[0].precio * 1.2) * area).toFixed(2))}
            cimbrado="5.2"
            ejecucion="8.1"
          />
          <Datos 
            bkg="cuatro"
            titulo="LOSA ALIGERADA Y VAR. G42"
            espesor={LosaAligerada[0].espesor}
            costo={thousands_separators((LosaAligerada[0].precio * 1.2).toFixed(2))}
            costoTotal={thousands_separators(((LosaAligerada[0].precio * 1.2) * area).toFixed(2))}
            cimbrado="5.2"
            ejecucion="6.6"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Resultados;