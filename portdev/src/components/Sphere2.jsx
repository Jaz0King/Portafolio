import React from 'react';
import { useRef, useState } from 'react';

const Sphere2 = () => {
    const [clicked, click] = useState(false)
    const ref = useRef()
   /* const texture = useCubeTexture(
        ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
        {path: "sphere/"}
    )*/

    return (
        <mesh 
        position={[6, 0, 0]} 
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