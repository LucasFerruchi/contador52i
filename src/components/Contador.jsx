import React, { useState } from "react";

const Contador = (props) => {
  console.log(props);
  //Cod javascript----------------------------------

  //   let contador = 0;

  //   //Funcion
  //   const contadorMas = () => {
  //     contador++;
  //     contador = contador + 1;
  //   };
  //Cod javascript----------------------------------

  //HOOKS
  //useState
  const [cuenta, setCuenta] = useState(props.inicialState);
  //State de ejemplo
  const [nombre, setNombre] = useState(null);

  //Funcion
  const contadorMas = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <h3>{cuenta}</h3>
      <button className="margenes" onClick={contadorMas}>
        +1
      </button>
      <button
        className="margenes"
        onClick={() => setCuenta(props.inicialState)}
      >
        Resetear
      </button>
      <button className="margenes" onClick={() => setCuenta(cuenta - 1)}>
        -1
      </button>
    </div>
  );
};

export default Contador;
