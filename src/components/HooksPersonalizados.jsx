import React, { useCallback, useState } from "react";

// ¿Cuándo usar hook useMemo()?
// 1. Componente funcional que recibe unas props y siempre devuelve lo mismo
// 2. Cuando un componente se re-renderiza muchas veces
// 3. Un componente recibe las mismas props y re-renderiza
// 4. Componentes grandes / muy grandes que contienen muchos elmentos UI que dependen de los props

function HooksPersonalizados() {

  const names = [
    'jairo',
    'samuel'
  ];

  return (
    <GeneradorNombres names={names} />
  )
}

function GeneradorNombres(props) {
  const { names } = props;

  const [name, setName] = useState(names[0]);
  
  const getName = useCallback(
    () => {
      const index = Math.floor(Math.random() * (names.length));
      setName(names[index]);
    }, [names]
  );

  const clearName = useCallback(
    () => {
      setName(null);
    }, []);

  return (
    <div >
      <h1>Memoize de React con useMemo y useCallback</h1>

      {React.useMemo(
        () => {
          console.log("Renderización Nombre");
          return (
            <div>
              <h2>Nombre Generado: {name ? name : 'Sin nombre'} </h2>
            </div>
          );
        }, [name]
      )}

      <Button
        label="Generar Nombre"
        click={getName}
      />
      <Button
        label="Borrar Nombre"
        click={clearName}
      />
    </div>
  )
}

function WrapperButton(props) {
  console.log("Renderizando Botón");
  return (
    <button
      onClick={() => {
        props.click();
      }}
    >
      {props.label}
    </button>
  );
}

const Button = React.memo(WrapperButton);

export default HooksPersonalizados;