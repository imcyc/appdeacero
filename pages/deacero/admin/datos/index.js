import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { TiArrowRight } from 'react-icons/ti';
import styles from '../../../../styles/Mapei.module.css'

function Datos() {

  const mandarDatos = (e) => {
    e.preventDefault();
    let factorcostos = e.target.factorcostos.value;
    console.log(factorcostos);
  }

  return (
    <div className='acccadmin'>
      <form onSubmit={mandarDatos}>
        <div align="center">
          <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{ width: '300px' }} />
        </div>
        <hr />
        <h2><TiArrowRight /> Administración de datos de calculadora de Losas para Vivienda</h2>
        <h4>Por favor ingresar los siguientes datos:</h4>
        <hr />
        <div className='acct'>
          <h3><TiArrowRight /> INGRESAR EL FACTOR GLOBAL DE COSTOS:</h3>
          <input type="number" name="factorcostos" className="mb-0" step="0.1" required="required" />
          <hr/>
          <h2><TiArrowRight /> Vig-Bov. A.A.</h2>
          <hr/>
          <h4>Cimbrado (m²/JOR):</h4>
          <input type="number" name="data_1" className="mb-0" step="0.25" required="required" />
          <h4>Colocación VIG A.A. (m²/JOR):</h4>
          <input type="number" name="data_2" className="mb-0" step="0.25" required="required" />
          <h4>Colocación M.S. 66-1010 (m²/JOR):</h4>
          <input type="number" name="data_3" className="mb-0" step="0.25" required="required" />
          <h4>LOSA VIG AA-BOV C/A (10/67):</h4>
          <input type="number" name="data_4" className="mb-0" step="0.25" required="required" />
          <h4>LOSA VIG AA-BOV C/A (14/67):</h4>
          <input type="number" name="data_5" className="mb-0" step="0.25" required="required" />
          <h4>BBLOCK 10X30X20:</h4>
          <input type="number" name="data_6" className="mb-0" step="0.25" required="required" />
          <h4>BBLOCK 15X30X20:</h4>
          <input type="number" name="data_7" className="mb-0" step="0.25" required="required" />
          <h4>LOSA VIG AA-BOV C/A (12/67):</h4>
          <input type="number" name="data_8" className="mb-0" step="0.25" required="required" />
          <h4>LOSA VIG AA-BOV C/A (15/67):</h4>
          <input type="number" name="data_9" className="mb-0" step="0.25" required="required" />
          <h4>POLIN Y TABLAS DE PINO:</h4>
          <input type="number" name="data_10" className="mb-0" step="0.25" required="required" />
          <h4>INFONAVIT:</h4>
          <input type="number" name="data_11" className="mb-0" step="0.25" required="required" />
          <h4>AL. RECOCIDO:</h4>
          <input type="number" name="data_12" className="mb-0" step="0.25" required="required" />
          <p><small>PRECIOS POR M³ (USADOS EN TODOS LOS TIPOS DE LOSA)</small></p>
          <h4>EN LOSAS COLADO CONCRETO:</h4>
          <input type="number" name="data_13" className="mb-0" step="0.25" required="required" />
          <h4>EN LOSAS AC. COMUN CIMBRA Y DESCIMBRA:</h4>
          <input type="number" name="data_14" className="mb-0" step="0.25" required="required" />
          <h4>EN LOSAS AC. VIGUETA Y BOVEDILLA CIMBRA Y DESCIMBRA:</h4>
          <input type="number" name="data_15" className="mb-0" step="0.25" required="required" />
          <h4>LOSA DE VIGUETA A.A. Y BOVEDILLA 1 NIVEL:</h4>
          <input type="number" name="data_16" className="mb-0" step="0.25" required="required" />
          <h4>LOSA DE VIGUETA A.A. Y BOVEDILLA 2 NIVEL:</h4>
          <input type="number" name="data_17" className="mb-0" step="0.25" required="required" />
          <h4>LOSA DE VIGUETA PRET. Y BOVEDILLA 2 NIVEL:</h4>
          <input type="number" name="data_18" className="mb-0" step="0.25" required="required" />
          <h4>EN CIM. Y PTA. BAJA HAB. Y ARM. DE VAR. 3/8:</h4>
          <input type="number" name="data_19" className="mb-0" step="0.25" required="required" />
          <h4>EN CIM. Y PTA. BAJA HAB. Y ARM. DE VAR. 1/2:</h4>
          <input type="number" name="data_20" className="mb-0" step="0.25" required="required" />
          <h4>EN ESTR. P/TEMP. EN LOSAS HAB. Y COL. DE M.S. 66-1010:</h4>
          <input type="number" name="data_21" className="mb-0" step="0.25" required="required" />
          <hr/>
          <h2><TiArrowRight /> Vig-Bov. Pretensada</h2>
          <hr/>
          <h4>Cimbrado (m²/JOR):</h4>
          <input type="number" name="data_22" className="mb-0" step="0.25" required="required" />
          <h4>Colocación VIG Pret. (m²/JOR):</h4>
          <input type="number" name="data_23" className="mb-0" step="0.25" required="required" />
          <h4>Colocación M.S. 66-1010 (m²/JOR):</h4>
          <input type="number" name="data_24" className="mb-0" step="0.25" required="required" />
          <hr/>
          <h2><TiArrowRight /> Losa Sólida</h2>
          <hr/>
          <h4>Cimbrado (m²/JOR):</h4>
          <input type="number" name="data_25" className="mb-0" step="0.25" required="required" />
          <hr/>
          <h2><TiArrowRight /> Losa Aligerada</h2>
          <hr/>
          <h4>Cimbrado (m²/JOR):</h4>
          <input type="number" name="data_26" className="mb-0" step="0.25" required="required" />
          <h4>SAL. REAL INT. Ayudante:</h4>
          <input type="number" name="data_27" className="mb-0" step="0.25" required="required" />
          <hr/>
          <button type="submit" className={styles.calcular}>REGISTRAR DATOS</button>
        </div>
      </form>
    </div>
  )
}

export default Datos;

