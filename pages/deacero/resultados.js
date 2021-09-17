import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../../styles/Mapei.module.css';
import Datos from '../components/datos';
import data from '../components/data.json';
//import { getWhyNextReasons } from "../../lib/api";


function Resultados() {
  const [area, setArea] = useState(0);
  const [destino, setDestino] = useState(0);
  const [claro, setClaro] = useState(0);
  const [pconcreto, setPconcreto] = useState(0);
  const [pmalla, setPmalla] = useState(0);
  const [pvar, setPvar] = useState(0);

  const [vigBovAA, setVigBovAA] = useState([]);
  const [vigBovPretensada, setVigBovPretensada] = useState([]);
  const [losasolida, setLosasolida] = useState([]);
  const [losaligerada, setLosaaligerada] = useState([]);

  useEffect(() => {
    setArea(localStorage.getItem('area'));
    setDestino(localStorage.getItem('destino'));
    setClaro(localStorage.getItem('claro'));
    setPconcreto(localStorage.getItem('pconcreto'));
    setPmalla(localStorage.getItem('pmalla'));
    setPvar(localStorage.getItem('pvar'));

    console.log(data);

    setVigBovAA(data.filter(dato => dato.tipo == "VigBovAA" && dato.longitud == claro && dato.destino == destino));
    setVigBovPretensada(data.filter(dato => dato.tipo == "VigBovPretensada" && dato.longitud == claro && dato.destino == destino));
    setLosasolida(data.filter(dato => dato.tipo == "LosaSolida" && dato.longitud == claro && dato.destino == destino));
    setLosaaligerada(data.filter(dato => dato.tipo == "LosaAligerada" && dato.longitud == claro && dato.destino == destino));

  }, [area, destino, claro, pconcreto, pmalla, pvar]);

  function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  //console.log(reasons);
  //console.log(area);

  if(!data || vigBovAA.length === 0 || vigBovPretensada.length == 0 || losasolida.length == 0 || losaligerada.length == 0){
    return(
      <div>
        CARGANDO
      </div>
    )
  };

  console.log('viguetas: '+ JSON.stringify(vigBovAA));

  return (
    <Layout>
      <div className="resultados">
        <div className="header">
          <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '200px'}} />
          <h2>LOSAS PARA VIVIENDA</h2>
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
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DEL CONCRETO: $ {thousands_separators(pconcreto)}</h2>
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DE LA MALLA SOLDADA: $ {thousands_separators(pmalla)}</h2>
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DE LA VARILLA G42: $ {thousands_separators(pvar)}</h2>
          </div>
        </div>
        <div className="layt">
          <Datos 
            bkg="uno"
            titulo="VIG-BOV Alma Abierta"
            espesor={vigBovAA[0].espesor}
            costo={vigBovAA[0].precio * 1.2}
            costoTotal={thousands_separators(((vigBovAA[0].precio * 1.2) * area).toFixed(2))}
            cimbrado={area / 32}
            ejecucion="4.9"
          />
          <Datos 
            bkg="dos"
            titulo="VIG-BOV Pretensada"
            espesor={vigBovPretensada[0].espesor}
            costo={vigBovPretensada[0].precio * 1.2}
            costoTotal={thousands_separators(((vigBovPretensada[0].precio * 1.2) * area).toFixed(2))}
            cimbrado={area / 32}
            ejecucion="5.2"
          />
        </div>
        <div className="layt dos">
          <Datos 
            bkg="tres"
            titulo="LOSA SÓLIDA Y VAR. G42"
            espesor={losasolida[0].espesor}
            costo={losasolida[0].precio * 1.2}
            costoTotal={thousands_separators(((losasolida[0].precio * 1.2) * area).toFixed(2))}
            cimbrado={area / 9.6}
            ejecucion="8.1"
          />
          <Datos 
            bkg="cuatro"
            titulo="LOSA ALIGERADA Y VAR. G42"
            espesor={losaligerada[0].espesor}
            costo={thousands_separators((losaligerada[0].precio * 1.2).toFixed(2))}
            costoTotal={thousands_separators(((losaligerada[0].precio * 1.2) * area).toFixed(2))}
            cimbrado={area / 9.6}
            ejecucion="6.6"
          />
        </div>
        <div className="layt tres">
          <Link href="/deacero/formulario">
            <h2 className={styles.volvercalcular}>VOLVER A CALCULAR</h2>
          </Link>
        </div>
      </div>
      
    </Layout>
  )
};

export default Resultados;