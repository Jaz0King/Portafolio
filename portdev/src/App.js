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
import Footer from "./components/Footer";
import { Html, MapControls, Stars, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";
import ModalDialog from "./components/ModalDialog";
import ModalDialog2 from "./components/ModalDialog2";
//Pasamos los objetos en 3D como props de ThreeScene

function App() {
  return (
    <div style={{ height: '80vh'}}>
      <div className="contText1">
        <ResponsiveAppBar />
        <Typewriter 
        dataToRotate={[
          [{type:"word", text: "Hola, Soy Jaziel Ramírez"}],
          [{type:"word", text: "Software Developer "}],
          [{type:"word", text: "Bienvenid@s"}],
          [{type:"word", text: "Navega por el ciberespacio"}],
          [{type:"word", text: "Haz zoom con los dedos o el  mouse"}],
          [{type:"word", text: "Muevete libremente"}],
          [{type:"word", text: "echa un vistazo a mis proyectos..."}]
        ]}
        /> 
      </div>
      
      <ThreeScene> 
        <color attach="background" args={['#161c24']}  /> 
        <Html
        sprite
        distanceFactor={10}
        position={[-4, 0, 0]}>
           <ModalDialog />
        </Html>
        <Sphere />
        <Html
        sprite
        distanceFactor={20}
        position={[3, 0, 2]}>
         <ModalDialog2 />
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

       

        <Sphere4 />

        <Sphere5 />

        <PerspectiveCamera 
        makeDefault
        position={[-5, 10, 10]}
        fov={75} />
        <MapControls autoRotate/>
        
        <Stars factor={5} />
        <ambientLight />
      </ThreeScene>
      
      <div className="contText2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
