import { useState, useEffect } from "react";

const counter = () => {
  const [contador, setContador] = useState(0);
  const [timeOut, setTimeOut] = useState(0);

  useEffect
  let incrementCounter = () => {
    setContador(contador + 1);
    let setter;
    if(timeOut === 0){
      clearTimeout(setter);
    }
    setter = setTimeout(() => {
      console.log(contador);
    }, 3000);
    setTimeOut(setter);
  }

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementCounter}>INCREMENT</button>
    </div>
  );
};

export default counter;