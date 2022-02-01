import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { TiArrowRight } from 'react-icons/ti';

function Datos() {
  return(
      <div className='acccadmin'>
        <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '300px'}} />
        <hr/>
        <h2><TiArrowRight/> Administración de datos de calculadora de Losas para Vivienda</h2>
        <h4>Por favor ingresar los siguientes datos:</h4>
        <hr/>
        <div className='acct'>
          <h3><TiArrowRight /> INGRESAR EL FACTOR GLOBAL DE COSTOS:</h3>
          <input type="number" name="factorcostos" className="mb-0" />
          <h2>Vig-Bov. A.A.</h2>
          <h4>Cimbrado (m²/JOR):</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>Colocación VIG A.A. (m²/JOR):</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>Colocación M.S. 66-1010 (m²/JOR):</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>LOSA VIG AA-BOV C/A (10/67):</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>LOSA VIG AA-BOV C/A (14/67):</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>BBLOCK 10X30X20:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>BBLOCK 15X30X20:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>LOSA VIG AA-BOV C/A (12/67):</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>LOSA VIG AA-BOV C/A (15/67):</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>POLIN Y TABLAS DE PINO:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>INFONAVIT:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>AL. RECOCIDO:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <p><small>PRECIOS POR M³ (USADOS EN TODOS LOS TIPOS DE LOSA)</small></p>
          <h4>EN LOSAS COLADO CONCRETO:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>EN LOSAS AC. COMUN CIMBRA Y DESCIMBRA:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>EN LOSAS AC. VIGUETA Y BOVEDILLA CIMBRA Y DESCIMBRA:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>LOSA DE VIGUETA A.A. Y BOVEDILLA 1 NIVEL:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>LOSA DE VIGUETA A.A. Y BOVEDILLA 2 NIVEL:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>LOSA DE VIGUETA PRET. Y BOVEDILLA 2 NIVEL:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>EN CIM. Y PTA. BAJA HAB. Y ARM. DE VAR. 3/8:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>EN CIM. Y PTA. BAJA HAB. Y ARM. DE VAR. 1/2:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
          <h4>EN ESTR. P/TEMP. EN LOSAS HAB. Y COL. DE M.S. 66-1010:</h4>
          <input type="number" name="factorcostos" className="mb-0" />
        </div>
      </div>
  )
}

export default Datos;