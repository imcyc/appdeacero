import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../../styles/Mapei.module.css';
import Datos from '../components/datos';

import data from '../components/data.json';
//import { getWhyNextReasons } from "../../lib/api";
function Resultados() {
  const [ladata, setLadata] = useState(data);
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
    
      setVigBovAA(ladata.filter(dato => dato.tipo == "VigBovAA" && dato.longitud == claro && dato.destino == destino)); 
      setVigBovPretensada(ladata.filter(dato => dato.tipo == "VigBovPretensada" && dato.longitud == claro && dato.destino == destino));
      setLosasolida(ladata.filter(dato => dato.tipo == "LosaSolida" && dato.longitud == claro && dato.destino == destino));
      setLosaaligerada(ladata.filter(dato => dato.tipo == "LosaAligerada" && dato.longitud == claro && dato.destino == destino));

      setArea(localStorage.getItem('area'));
      setDestino(localStorage.getItem('destino'));
      setClaro(localStorage.getItem('claro'));
      setPconcreto(localStorage.getItem('pconcreto'));
      setPmalla(localStorage.getItem('pmalla'));
      setPvar(localStorage.getItem('pvar'));
      
  }, []);

  if(!ladata){
    return <div className='cargando'>Cargando datos</div>;
  };

  let VigBovAAJornada = ladata.filter(dato => dato.tipo == "VigBovAA" && dato.longitud == claro && dato.destino == destino);
  let VigBovPretensadaJornada = ladata.filter(dato => dato.tipo == "VigBovPretensada" && dato.longitud == claro && dato.destino == destino);
  let LosasolidaJornada = ladata.filter(dato => dato.tipo == "LosaSolida" && dato.longitud == claro && dato.destino == destino);
  let LosaaligeradaJornada = ladata.filter(dato => dato.tipo == "LosaAligerada" && dato.longitud == claro && dato.destino == destino);

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
  let precio3VigBovPret = 0.0523*(parseFloat(pconcreto)+202.39)+((170+10)+45.42*1.1018)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio2VigBovPret = precio3VigBovPret-0.5*pvar;
  let precio4VigBovPret = 0.0485*(parseFloat(pconcreto)+202.39)+((205+10)+45.42*1.1018)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio5VigBovPret = precio4VigBovPret-0.5*pvar;
  let precio6VigBovPret = 0.0547*(parseFloat(pconcreto)+202.39)+((240+10)+45.42*1.1018)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio7VigBovPret = precio6VigBovPret-0.5*pvar;
  let precio8VigBovPret = 0.0578*(parseFloat(pconcreto)+202.39)+((256.25+10)+45.42*1.10)+1.05*(parseFloat(pmalla * 100)/100+6.26)+1.41*(11.33+0)+(0+28.22);
  let precio9VigBovPret = precio8VigBovPret-0.5*pvar;

  let costoTVigBovPret = 0;
  if(destino === "Azotea" && claro == "3"){
    costoTVigBovPret = precio0VigBovPret;
  } else if(destino === "Entrepiso" && claro == "3"){
    costoTVigBovPret = precio1VigBovPret;
  } else if(destino === "Azotea" && claro == "3.5"){
    costoTVigBovPret = precio3VigBovPret;
  } else if(destino === "Entrepiso" && claro == "3.5"){
    costoTVigBovPret = precio2VigBovPret;
  } else if(destino === "Azotea" && claro == "4"){
    costoTVigBovPret = precio5VigBovPret;
  } else if(destino === "Entrepiso" && claro == "4"){
    costoTVigBovPret = precio4VigBovPret;
  } else if(destino === "Azotea" && claro == "4.5"){
    costoTVigBovPret = precio7VigBovPret;
  } else if(destino === "Entrepiso" && claro == "4.5"){
    costoTVigBovPret = precio6VigBovPret;
  } else if(destino === "Azotea" && claro == "5"){
    costoTVigBovPret = precio9VigBovPret;
  } else if(destino === "Entrepiso" && claro == "5"){
    costoTVigBovPret = precio8VigBovPret;
  };

  /*
  let precio1LosaSolida = 0.105*(parseFloat(pconcreto)+202.39)+4.27*(15.4+4.23)+(4.27*0.035)*(24.82+0)+6.228*(11.33+0)+(0+90.29);
  let precio2LosaSolida = precio1LosaSolida-0.5*pvar;
  let precio3LosaSolida = 0.126*(parseFloat(pconcreto)+202.39)+5.12*(15.4+4.23)+(5.12*0.035)*(24.82+0)+6.228*(11.33+0)+(0+90.29);
  let precio4LosaSolida = precio3LosaSolida-0.5*pvar;
  let precio5LosaSolida = 0.1412*(parseFloat(pconcreto)+202.39)+5.97*(15.4+4.23)+(5.97*0.035)*(24.82+0)+6.228*(11.33+0)+(0+90.29);
  let precio6LosaSolida = precio5LosaSolida-0.5*pvar;
  let precio7LosaSolida = 0.1575*(parseFloat(pconcreto)+202.39)+6.82*(15.4+4.23)+(6.82*0.035)*(24.82+0)+6.228*(11.33+0)+(0+90.29);
  let precio8LosaSolida = precio7LosaSolida-0.5*pvar;
  let precio9LosaSolida = 0.1785*(parseFloat(pconcreto)+202.39)+7.68*(15.4+4.23)+(7.68*0.035)*(24.82+0)+6.228*(11.33+0)+(0+90.29);
  let precio10LosaSolida = precio9LosaSolida-0.5*pvar;
  */
  let precio1LosaSolida = 0.105*(parseFloat(pconcreto)+202.3881588)+4.27*(parseFloat(pvar)+4.23214656)+(4.27*0.035)*24.82+6.228*11.33+90.28931134;
  let precio2LosaSolida = precio1LosaSolida-0.5*parseFloat(pvar);
  let precio3LosaSolida = 0.126*(parseFloat(pconcreto)+202.3881588)+5.12*(parseFloat(pvar)+4.23214656)+(5.12*0.035)*24.82+6.228*11.33+90.28931134;
  let precio4LosaSolida = precio3LosaSolida-0.5*parseFloat(pvar);
  let precio5LosaSolida = 0.1412*(parseFloat(pconcreto)+202.3881588)+5.97*(parseFloat(pvar)+4.23214656)+(5.97*0.035)*24.82+6.228*11.33+90.28931134;
  let precio6LosaSolida = precio5LosaSolida-0.5*parseFloat(pvar);
  let precio7LosaSolida = 0.1575*(parseFloat(pconcreto)+202.3881588)+6.82*(parseFloat(pvar)+4.23214656)+(6.82*0.035)*24.82+6.228*11.33+90.28931134;
  let precio8LosaSolida = precio7LosaSolida-0.5*parseFloat(pvar);
  let precio9LosaSolida = 0.1785*(parseFloat(pconcreto)+202.3881588)+7.68*(parseFloat(pvar)+4.23214656)+(7.68*0.035)*24.82+6.228*11.33+90.28931134;
  let precio10LosaSolida = precio9LosaSolida-0.5*parseFloat(pvar);
  let costoLosaSolida = 0;
  if(destino === "Azotea" && claro == "3"){
    costoLosaSolida = precio2LosaSolida;
  } else if(destino === "Entrepiso" && claro == "3"){
    costoLosaSolida = precio1LosaSolida;
  } else if(destino === "Azotea" && claro == "3.5"){
    costoLosaSolida = precio4LosaSolida;
  } else if(destino === "Entrepiso" && claro == "3.5"){
    costoLosaSolida = precio3LosaSolida;
  } else if(destino === "Azotea" && claro == "4"){
    costoLosaSolida = precio6LosaSolida;
  } else if(destino === "Entrepiso" && claro == "4"){
    costoLosaSolida = precio5LosaSolida;
  } else if(destino === "Azotea" && claro == "4.5"){
    costoLosaSolida = precio8LosaSolida;
  } else if(destino === "Entrepiso" && claro == "4.5"){
    costoLosaSolida = precio7LosaSolida;
  } else if(destino === "Azotea" && claro == "5"){
    costoLosaSolida = precio10LosaSolida;
  } else if(destino === "Entrepiso" && claro == "5"){
    costoLosaSolida = precio9LosaSolida;
  };

  //let precio1LosaAligerada = 14*(6.73+341.05/320)+0.057*(parseFloat(pconcreto)+202.39)+1.509*(15.4+4.03)+0.851*(15.4+4.23)+1.05*(parseFloat(pmalla * 100)/100+6.26)+6.228*(11.33+0)+(0+90.29);
  //14*($Q$98+$AA$98/320)+0.057*($S$85+$AD$108)+1.509*($S$87+$BE$108)+0.851*($S$86+$BB$108)+1.05*($S$88/100+$BT$108)+$S$106*($Q$103+0)+(0+$AG$108)
  //let precio1LosaAligerada = 14*(6.73+341.0538/320)+0.057*(parseFloat(pconcreto)+202.3881588)+1.509*(parseFloat(pvar)+4.030615771)+0.851*(parseFloat(pvar)+4.23214656)+1.05*(parseFloat(pmalla)+6.262742583)+6.228*11.33+90.28931134;
  let precio1LosaAligerada = 14*(6.73+341.05/320)+0.057*(parseFloat(pconcreto)+202.39)+1.509*(parseFloat(pvar)+4.03)+0.851*(parseFloat(pvar)+4.23)+1.05*(parseFloat(pmalla)+6.26)+6.228*(11.33+0)+(0+90.29);
  let precio3LosaAligerada = 14*(6.73+341.0538/320)+0.057*(parseFloat(pconcreto)+202.39)+2.55*(parseFloat(pvar)+4.23)+1.05*(2370/100+6.26)+6.228*(11.33+0)+(0+90.29);
  let precio9LosaAligerada = 14*(9.52+341.0538/240)+0.0714*(parseFloat(pconcreto)+202.3881588)+3.02*(parseFloat(pvar)+4.23214656)+0.85*(parseFloat(pvar)+4.23214656)+1.05*(parseFloat(pmalla)+6.262742583)+6.228*11.33+90.28931134;
  let precio2LosaAligerada = precio1LosaAligerada-0.5*parseFloat(pvar);
  let precio4LosaAligerada = precio3LosaAligerada-0.5*parseFloat(pvar);
  let precio6LosaAligerada = precio3LosaAligerada+(precio9LosaAligerada-precio3LosaAligerada)/3;
  let precio5LosaAligerada = precio6LosaAligerada-0.5*parseFloat(pvar);
  let precio8LosaAligerada = precio3LosaAligerada+(precio9LosaAligerada-precio3LosaAligerada)*2/3;
  let precio7LosaAligerada = precio8LosaAligerada-0.5*parseFloat(pvar);
  let precio10LosaAligerada = precio9LosaAligerada-0.5*parseFloat(pvar);
  
  console.log('PRECIO 1: '+precio2LosaAligerada);
  console.log('PRECIO 2: '+precio1LosaAligerada);
  console.log('PRECIO 3: '+precio4LosaAligerada);
  console.log('PRECIO 4: '+precio3LosaAligerada);
  console.log('PRECIO 5: '+precio5LosaAligerada);
  console.log('PRECIO 6: '+precio6LosaAligerada);
  console.log('PRECIO 7: '+precio7LosaAligerada);
  console.log('PRECIO 8: '+precio8LosaAligerada);
  console.log('PRECIO 9: '+precio10LosaAligerada);
  console.log('PRECIO 10: '+precio9LosaAligerada);
  //return precio7LosaAligerada;
  let costoLosaAligerada = 0;
  if(destino === "Azotea" && claro == "3"){
    costoLosaAligerada = precio2LosaAligerada;
  } else if(destino === "Entrepiso" && claro == "3"){
    costoLosaAligerada = precio1LosaAligerada;
  } else if(destino === "Azotea" && claro == "3.5"){
    costoLosaAligerada = precio4LosaAligerada;
  } else if(destino === "Entrepiso" && claro == "3.5"){
    costoLosaAligerada = precio3LosaAligerada;
  } else if(destino === "Azotea" && claro == "4"){
    costoLosaAligerada = precio5LosaAligerada;
  } else if(destino === "Entrepiso" && claro == "4"){
    costoLosaAligerada = precio6LosaAligerada;
  } else if(destino === "Azotea" && claro == "4.5"){
    costoLosaAligerada = precio7LosaAligerada;
  } else if(destino === "Entrepiso" && claro == "4.5"){
    costoLosaAligerada = precio8LosaAligerada;
  } else if(destino === "Azotea" && claro == "5"){
    costoLosaAligerada = precio10LosaAligerada;
  } else if(destino === "Entrepiso" && claro == "5"){
    costoLosaAligerada = precio9LosaAligerada;
  };

  let espesor = '';
  if(claro === "3"){
    espesor = '14';
  } else if(claro === "3.5"){
    espesor = '15';
  } else if(claro === "4"){
    espesor = '16';
  } else if(claro === "4.5"){
    espesor = '15';
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

  return (
    <Layout>
      <div className="resultados">
        <div className="header">
          <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '200px'}} />
          <h2>LOSAS PARA VIVIENDA</h2>
          <h3>EN UNA DIRECCIÓN, SIMPLEMENTE APOYADAS</h3>
          <hr/>
          <h2 className="naranja">RESULTADOS</h2>
        </div>
        
        <div className="datos">
          <div>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              ÁREA (m<sup>2</sup>): <span className="naranja">{area}</span> {/*<input type="number" step="10" placeholder={area} onChange={cambioArea} className="tectron" />*/}
            </h2>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              DESTINO:  <span className="naranja">{destino}</span>
              {/*
              <select onChange={cambioDestino} className="tectron">
                <option value={destino}>{destino}</option>
                <option value="Entrepiso">ENTREPISO</option>
                <option value="Azotea">AZOTEA</option>
              </select>
              */}
            </h2>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              LONGITUD DE CLARO (m): <span className='naranja'>{claro}</span>
              {/*
              <select onChange={cambioClaro} className="tectron">
                <option value={claro}>{claro}</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </select>
               */}
            </h2>
          </div>
          <div>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              PRECIO DEL CONCRETO: <span className="naranja">$ {pconcreto}</span>
              {/*<input type="number" step="10" placeholder={pconcreto} onChange={cambioPrecio} className="tectron" />*/}
            </h2>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              PRECIO DE LA MALLA SOLDADA: <span className="naranja">$ {pmalla}</span>
              {/*<input type="number" step="10" placeholder={pmalla} onChange={cambioPrecioMalla} className="tectron" />*/}
            </h2>
            <h2 className="flexter">
              <span className="lnr lnr-chevron-right"></span> 
              PRECIO DE LA VARILLA G42: <span className="naranja">$ {pvar}</span>
              {/*<input type="number" step="10" placeholder={pvar} onChange={cambioPrecioVarilla} className="tectron" />*/}
            </h2>
          </div>
        </div>
        
        <div className="layt">
          <Datos 
            bkg="uno"
            titulo="VIG-BOV Alma Abierta"
            clarox={claro}
            costo={(costoTVigBovAA * 1.2).toFixed(2)}
            costoTotal={thousands_separators(((costoTVigBovAA * 1.2) * area).toFixed(2))}
            cimbrado={(area / 32).toFixed(1)}
            ejecucion={((area / 32) + (area / 19) + (area / 160) + (area / (6 / VigBovAAJornada[0].concreto))).toFixed(1)}
            imagen="1"
          />
          <Datos 
            bkg="dos"
            titulo="VIG-BOV Pretensada"
            clarox={claro}
            costo={(costoTVigBovPret * 1.2).toFixed(2)}
            costoTotal={thousands_separators(((costoTVigBovPret * 1.2) * area).toFixed(2))}
            cimbrado={(area / 32).toFixed(1)}
            ejecucion={((area / 32) + (area / 17.2) + (area / 160) + (area / (6 / VigBovPretensadaJornada[0].concreto))).toFixed(1)}
            imagen="2"
          />
        </div>
        <div className="layt">
          <Datos 
            bkg="dos"
            titulo="LOSA SÓLIDA Y VAR. G42"
            clarox={claro}
            costo={(costoLosaSolida * 1.2).toFixed(2)}
            costoTotal={thousands_separators(((costoLosaSolida * 1.2) * area).toFixed(2))}
            cimbrado={(area / 9.6).toFixed(1)}
            ejecucion={((area / 9.6) + (area / LosasolidaJornada[0].rendimiento) + (area / (6 / LosasolidaJornada[0].concreto))).toFixed(1)}
            imagen="3"
          />
          <Datos 
            bkg="dos"
            titulo="LOSA ALIGERADA Y VAR. G42"
            clarox={claro}
            costo={(costoLosaAligerada * 1.2).toFixed(2)}
            costoTotal={thousands_separators((area * (costoLosaAligerada * 1.2).toFixed(2)).toFixed(2))}
            cimbrado={(area / 9.6).toFixed(1)}
            ejecucion={((area / 9.6) + (area / LosaaligeradaJornada[0].rendimiento) + (area / (6 / LosaaligeradaJornada[0].concreto))).toFixed(1)}
            imagen="4"
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