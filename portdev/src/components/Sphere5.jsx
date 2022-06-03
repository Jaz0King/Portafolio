import React from 'react';
import { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import matcap2 from '../assets/matcap2.png';

const Sphere5 = () => {
    const [clicked, click] = useState(false)
    const ref = useRef()

    const matcap = useLoader(TextureLoader, matcap2)
 
    return (
        
        <mesh 
        position={[18, 4, 0]}
        ref={ref}
        scale={clicked ? 2.5 : 1}
        onClick={(e) => click(!clicked)}
        >
          <sphereGeometry /> 
          <meshMatcapMaterial matcap={matcap} />  
        </mesh>
        
    )
}

export default Sphere5;