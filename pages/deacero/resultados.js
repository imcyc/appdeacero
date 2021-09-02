import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../../styles/Mapei.module.css';
import Datos from '../components/datos';
import { getWhyNextReasons } from "../../lib/api";

function Resultados({ reasons }) {

  const [datos, setDatos] = useState();
  const [vigBovAA, setVigBovAA] = useState({});
  const [vigBovPretensada, setVigBovPretensada] = useState({});
  const [losaSolida, setLosaSolida] = useState({});
  const [losaAligerada, setLosaAligerada] = useState({});

  useEffect(() => {
    let data = require('../components/data.json');
    setDatos(data);
    setVigBovAA(data.filter(dato => dato.tipo === "VigBovAA" && dato.longitud == claro && dato.destino === destino));
    setVigBovPretensada(data.filter(dato => dato.tipo === "VigBovPretensada" && dato.longitud == claro && dato.destino === destino));
    setLosaSolida(data.filter(dato => dato.tipo === "LosaSolida" && dato.longitud == claro && dato.destino === destino));
    setLosaAligerada(data.filter(dato => dato.tipo === "LosaAligerada" && dato.longitud == claro && dato.destino === destino));
  }, []);

  const router = useRouter()
  const area = router.query.area;
  const destino = router.query.destino;
  const claro = Number(router.query.claro);
  const pconcreto = router.query.pconcreto;
  const pmalla = router.query.pmalla;
  const pvar = router.query.pvar;

  if(!datos){
    return(
      <div>
        CARGANDO
      </div>
    )
  };

  function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons
            .slice(0, reasons.length - 1)
            .map(({ title, description, href }) => (
              <a
                className="border border-grey-200 rounded p-4 hover:shadow-lg hover:border-transparent"
                key={title}
                href={href}
                target="_blank"
              >
                <h3 className="font-bold mb-2">{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <span className="text-blue-600 hover:text-blue-400 hover:underline mt-4 block">
                  Documentation →
                </span>
              </a>
            ))}
        </div>
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
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DEL CONCRETO: $ {pconcreto}</h2>
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DE LA MALLA SOLDADA: $ {pmalla}</h2>
            <h2><span className="lnr lnr-chevron-right"></span> PRECIO DE LA VARILLA G42: $ {pvar}</h2>
          </div>
        </div>
        <div className="layt">
          <Datos 
            bkg="uno"
            titulo="VIG-BOV Alma Abierta"
            espesor={vigBovAA[0].espesor}
            costo={vigBovAA[0].precio * 1.2}
            costoTotal={thousands_separators(((vigBovAA[0].precio * 1.2) * area).toFixed(2))}
            cimbrado="1.6"
            ejecucion="4.9"
          />
          <Datos 
            bkg="dos"
            titulo="VIG-BOV Pretensada"
            espesor={vigBovPretensada[0].espesor}
            costo={vigBovPretensada[0].precio * 1.2}
            costoTotal={thousands_separators(((vigBovPretensada[0].precio * 1.2) * area).toFixed(2))}
            cimbrado="1.6"
            ejecucion="5.2"
          />
        </div>
        <div className="layt dos">
          <Datos 
            bkg="tres"
            titulo="LOSA SÓLIDA Y VAR. G42"
            espesor={losaSolida[0].espesor}
            costo={losaSolida[0].precio * 1.2}
            costoTotal={thousands_separators(((losaSolida[0].precio * 1.2) * area).toFixed(2))}
            cimbrado="5.2"
            ejecucion="8.1"
          />
          <Datos 
            bkg="cuatro"
            titulo="LOSA ALIGERADA Y VAR. G42"
            espesor={losaAligerada[0].espesor}
            costo={thousands_separators((losaAligerada[0].precio * 1.2).toFixed(2))}
            costoTotal={thousands_separators(((losaAligerada[0].precio * 1.2) * area).toFixed(2))}
            cimbrado="5.2"
            ejecucion="6.6"
          />
        </div>
        <div className="layt tres">
          <hr/>
          <Link href="/deacero/formulario">
            <h2 className={styles.volvercalcular}>VOLVER A CALCULAR</h2>
          </Link>
        </div>
      </div>
      
    </Layout>
  )
};

export async function getStaticProps(context) {
  const reasons = await getWhyNextReasons();

  return {
    props: {
      reasons,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default Resultados;