import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../../styles/Mapei.module.css';
import Datos from '../components/datos';
import data from '../components/data.json';
//import { getWhyNextReasons } from "../../lib/api";

function Resultados() {
  const [area, setArea] = useState('');
  const [destino, setDestino] = useState('');
  const [claro, setClaro] = useState('');
  const [pconcreto, setPconcreto] = useState('');
  const [pmalla, setPmalla] = useState('');
  const [pvar, setPvar] = useState('');

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
    setVigBovAA(data.filter(dato => dato.tipo == "VigBovAA" && dato.longitud == claro && dato.destino == destino));
    setVigBovPretensada(data.filter(dato => dato.tipo == "VigBovPretensada" && dato.longitud == claro && dato.destino == destino));
    setLosasolida(data.filter(dato => dato.tipo == "LosaSolida" && dato.longitud == claro && dato.destino == destino));
    setLosaaligerada(data.filter(dato => dato.tipo == "LosaAligerada" && dato.longitud == claro && dato.destino == destino));

  }, []);

  function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  let precio1VigBovAA = 0.0462*(parseFloat(pconcreto)+202.39)+(170+45.42)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio0VigBovAA = precio1VigBovAA-0.5*pvar;
  let precio3VigBovAA = 0.0537*(parseFloat(pconcreto)+202.39)+(170+45.42)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio2VigBovAA = precio3VigBovAA-0.5*pvar;
  let precio5VigBovAA = 0.0452*(parseFloat(pconcreto)+202.39)+(205+45.42)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio4VigBovAA = precio5VigBovAA-0.5*pvar;
  let precio7VigBovAA = 0.0467*(parseFloat(pconcreto)+202.39)+(240+45.42)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio6VigBovAA = precio7VigBovAA-0.5*pvar;
  let precio9VigBovAA = 0.0575*(parseFloat(pconcreto)+202.39)+(256.25+45.42)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio8VigBovAA = precio9VigBovAA-0.5*pvar;

  let costoTVigBovAA = 0;
  if(destino === "Azotea" && claro == "3"){
    costoTVigBovAA = precio0VigBovAA;
  } else if(destino === "Entrepiso" && claro == "3"){
    costoTVigBovAA = precio1VigBovAA;
  } else if(destino === "Azotea" && claro == "3.5"){
    costoTVigBovAA = precio2VigBovAA;
  } else if(destino === "Entrepiso" && claro == "3.5"){
    costoTVigBovAA = precio3VigBovAA;
  } else if(destino === "Azotea" && claro == "4"){
    costoTVigBovAA = precio4VigBovAA;
  } else if(destino === "Entrepiso" && claro == "4"){
    costoTVigBovAA = precio5VigBovAA;
  } else if(destino === "Azotea" && claro == "4.5"){
    costoTVigBovAA = precio6VigBovAA;
  } else if(destino === "Entrepiso" && claro == "4.5"){
    costoTVigBovAA = precio7VigBovAA;
  } else if(destino === "Azotea" && claro == "5"){
    costoTVigBovAA = precio8VigBovAA;
  } else if(destino === "Entrepiso" && claro == "5"){
    costoTVigBovAA = precio9VigBovAA;
  };

  let precio1VigBovPret = 0.0423*(parseFloat(pconcreto)+202.39)+((170+10)+45.42*1.1018)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio0VigBovPret = precio1VigBovPret-0.5*pvar;

  let costoTVigBovPret = 0;

  let espesor = '';
  if(claro === "3"){
    espesor = '14';
  } else if(claro === "3.5"){
    espesor = '15';
  } else if(claro === "4"){
    espesor = '16';
  } else if(claro === "4.5"){
    espesor = '18';
  } else if(claro === "5"){
    espesor = '20';
  }

  if(!espesor){
    return(
      <div>
        CARGANDO
      </div>
    )
  };

  const cambioArea = (e) => {
    setArea(e.target.value)
  };

  return (
    <Layout>
      <div className="resultados">
        <div className="header">
          <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '200px'}} />
          <h2>LOSAS PARA VIVIENDA</h2>
          <h3>EN UNA DIRECCIÓN, SIMPLEMENTE APOYADAS</h3>
          <hr/>
          <h2 className="naranja">RESULTADOS</h2>
          <h3>{precio0VigBovPret} - {precio1VigBovPret}</h3>
        </div>
        <div className="datos">
          <div>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              ÁREA (m<sup>2</sup>): <input type="number" step="10" placeholder={area} onChange={cambioArea} className="tectron" />
            </h2>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              DESTINO: 
              <select onChange={(e) => setDestino(e.target.value)} className="tectron">
                <option value={destino}>{destino}</option>
                <option value="Entrepiso">ENTREPISO</option>
                <option value="Azotea">AZOTEA</option>
              </select>
            </h2>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              LONGITUD DE CLARO (m):
              <select onChange={(e) => setClaro(e.target.value)} className="tectron">
                <option value={claro}>{claro}</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
                <option value="5">5.5</option>
              </select>
            </h2>
          </div>
          <div>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              PRECIO DEL CONCRETO:$
              <input type="number" step="10" placeholder={pconcreto} onChange={(e) => setPconcreto(e.target.value)} className="tectron" />
            </h2>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              PRECIO DE LA MALLA SOLDADA: $
              <input type="number" step="10" placeholder={pmalla} onChange={(e) => setPmalla(e.target.value)} className="tectron" />
            </h2>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              PRECIO DE LA VARILLA G42: $
              <input type="number" step="10" placeholder={pvar} onChange={(e) => setPvar(e.target.value)} className="tectron" />
            </h2>
          </div>
        </div>
        <div className="layt">
          <Datos 
            bkg="uno"
            titulo="VIG-BOV Alma Abierta"
            espesor={espesor}
            costo={(costoTVigBovAA * 1.2).toFixed(2)}
            costoTotal={thousands_separators(((costoTVigBovAA * 1.2) * area).toFixed(2))}
            cimbrado={(area / 32).toFixed(1)}
            ejecucion={((area / 32) + 5.3 + 0.6 + 0.8).toFixed(1)}
          />
          {/* 
          <Datos 
            bkg="dos"
            titulo="VIG-BOV Pretensada"
            espesor={vigBovPretensada[0].espesor}
            costo={vigBovPretensada[0].precio * 1.2}
            costoTotal={thousands_separators(((vigBovPretensada[0].precio * 1.2) * area).toFixed(2))}
            cimbrado={area / 32}
            ejecucion="5.2"
          />
          */}
        </div>
        <div className="layt dos">
          {/* 
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
          */}
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