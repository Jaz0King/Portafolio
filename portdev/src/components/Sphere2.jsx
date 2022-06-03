import React from 'react';
import { useRef, useState } from 'react';

const Sphere2 = () => {
    const [clicked, click] = useState(false)
    const ref = useRef()
  
    return (
        <mesh 
        position={[8, 0, 6]} 
        ref={ref}
        scale={clicked ? 2.5 : 1}
        onClick={(e) => click(!clicked)}
        >
          <sphereGeometry args={[2,30,30]} /> 
          <meshNormalMaterial />
          
        </mesh>
    )
}

export default Sphere2;