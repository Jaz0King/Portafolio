import React from 'react';
import { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import matcap1 from '../assets/pt.png';

const Sphere3 = () => {
    const [clicked, click] = useState(false)
    const ref = useRef()

    const matcap = useLoader(TextureLoader, matcap1)
 
    return (
        
        <mesh 
        position={[-20, 0, 0]}
        ref={ref}
        scale={clicked ? 2.5 : 1}
        onClick={(e) => click(!clicked)}
        >
          <sphereGeometry args={[3,90,90]}/> 
          <meshMatcapMaterial matcap={matcap} />  
        </mesh>
        
    )
}

export default Sphere3;