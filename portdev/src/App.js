import "./app.css";
import { Suspense } from "react";
import CV from "./assets/CV.pdf";
import ThreeScene from "./components/ThreeScrene";
import Sphere from "./components/Sphere";
import Sphere2 from "./components/Sphere2";
import Sphere3 from "./components/Sphere3";
import Sphere4 from "./components/Sphere4";
import Sphere5 from "./components/Sphere5";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Html, MapControls, Stars, OrbitControls} from "@react-three/drei";
import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";
import ModalDialog from "./components/ModalDialog";
//Pasamos los objetos en 3D como props de ThreeScene
function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div className="contText1">
        <ResponsiveAppBar />
        <Typewriter 
        dataToRotate={[
          [{type:"word", text: "Hola, Soy Jaziel Ramírez software developer, bienvenido a mi portafolio "}],
          [{type:"word", text: "Atrevete a navegar por el ciberespacio, haz zoom o mueve con el puntero"}]
        ]}
        /> 

      </div>
      
      <ThreeScene> 
        <color attach="background" args={['#161c24']}  /> 
        <Html
        sprite
        distanceFactor={10}
        position={[-1, 0, 0]}>
           <ModalDialog />
        </Html>

        <Suspense fallback={null}>
        <Sphere />
        </Suspense>
        
        <Html
        sprite
        distanceFactor={20}
        position={[3, 0, 2]}>
         <a href='https://mui.com/material-ui/react-button/#text-buttons' 
         target='_blanck'
         className="subt" 
         > 
           Star2
         </a>
        </Html>
        <Sphere3 color= "blue"  />
        <Html
        sprite
        distanceFactor={20}
        position={[7, 0, 0]}>
         <a href='https://mui.com/material-ui/react-button/#text-buttons' 
         target='_blanck'
         className="subt" 
         > 
           Star3
         </a>
        </Html>
        <Sphere2 />
        <Html
        sprite
        distanceFactor={20}
        position={[11, 0, 0]}>
         <a href={CV} 
         target='_blanck'
         className="subt" 
         > 
           Star4
         </a>
        </Html>

        <Sphere color= "purple" position={[10, 0, 0]} metalness={0} roughness={1} />

        <Sphere4 />

        <Sphere5 />

        
        <OrbitControls autoRotate/>
        <Stars factor={5}/>
        <ambientLight />
      </ThreeScene>
      
    </div>
  );
}

export default App;
