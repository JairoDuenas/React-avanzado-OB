import React, { useCallback, useMemo, useState } from 'react';

// useMemo --> React.memo() --> funciones creacionales de componentes que deben memoizar algo
// useCallback --> Memoizar valores listados en la dependencia. Funciones en línea

const MiComponente = () => {
  
  const [name, setName] = useState('');

  const names = [
    'jairo',
    'samuel'
  ];

  const getName = useCallback(() => {
    // first; Hacer algo
    const random = Math.floor(Math.random() * (names.length - 1));
    setName(names[random])
  }, [name]);

  const clearName = useCallback(() => {
    // first; Hacer algo
    setName(null)
  }, []);
  

  return (
    <h1>Mi componente</h1>
  )
}

// const Memoization = useMemo(() => MiComponente, [a, b]);



