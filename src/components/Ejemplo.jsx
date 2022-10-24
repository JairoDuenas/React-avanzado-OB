import React, { memo, useState } from "react";

export default function Ejemplo() {

  const names = [
    'jairo',
    'samuel'
  ]

  const [name, setName] = useState('');

  const getName = () => {
    const random = Math.floor(Math.random() * (names.length - 1));
    return names[random];
  }

  const clearName = () => {
    setName('')
  }

  const obtainName = () => {
    setName(getName())
  }

  return (
    <div>
      <h1>Ejemplo de uso de React Memo</h1>
      <NombresAleatorios name={name} clearName={clearName} ></NombresAleatorios>
      <button onClick={() => obtainName()} >
        Generar nombre
      </button>
    </div>
  )
}

export const NameComponent = (props) => {
  console.log("Renderizando de nuevo")

  return (
    <div>
      <h2>
        {props.names}
      </h2>
      <button onClick={() => props.clearName()} >
        Borrar nombre
      </button>
      
    </div>
  )
}

function namesAreEqual(prevProps, nextProps) {
  return prevProps.name !== nextProps.name
}

export const NombresAleatorios = memo(NameComponent, namesAreEqual);

