import React from 'react';
import { Canvas } from '@react-three/fiber';  // Importamos el lienzo de la libreria

const ThreeScene = ({children}) => {
  return <Canvas>{children}</Canvas>;  // Llamamos el componente de lienzo de la libreria para la escena
};

export default ThreeScene;