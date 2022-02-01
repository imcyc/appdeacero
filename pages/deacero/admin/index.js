import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TiArrowRight } from 'react-icons/ti';
import styles from '../../../styles/Mapei.module.css';

function Admin() {

  const router = useRouter();

  const datos = (e) => {
    e.preventDefault();
    let usuario = e.target.nombre.value;
    console.log('los datos');
    router.push({
      pathname: "/deacero/admin/datos/",
      query: { pid: usuario },
    });
  };

  return(
    <div className={styles.admindeacero}>
      <form onSubmit={datos}>
        <img src="/logo-deacero.svg" alt="Calculadoras para la construcción - Instituto Mexicano del Cemento y del Concreto A.C" style={{width: '300px'}} />
        <hr/>
        <h2>ADMINISTRADOR</h2>
        <hr/>
        <h3><TiArrowRight /> NOMBRE DE USUARIO:</h3>
        <input type="text" name="nombre" placeholder="Ingresar tu nombre de usuario" />
        <h3><TiArrowRight /> CONTRASEÑA:</h3>
        <input type="password" name="contrasena" className="mb-0" />
        <button type="submit" className={styles.calcular}>INGRESAR</button>
      </form>
    </div>
  )
}

export default Admin;