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
import ModalDialog3 from "./components/ModalDialog3";
import ModalDialog4 from "./components/ModalDialog4";
import ModalDialog5 from "./components/ModalDialog5";
//Pasamos los objetos en 3D como props de ThreeScene

function App() {
  return (
    <div style={{ height: '81vh'}}>
      <div className="contText1">
        <ResponsiveAppBar />
        <Typewriter 
        dataToRotate={[
          [{type:"word", text: "Hola, Soy Jaziel Ramírez"}],
          [{type:"word", text: "Software Developer "}],
          [{type:"word", text: "Bienvenid@s"}],
          [{type:"word", text: "Atrevete y navega libremente"}],
          [{type:"word", text: "Haz zoom con los dedos o el  mouse"}],
          [{type:"word", text: "Muevete libremente"}],
          [{type:"word", text: "Navega con la barra superior"}],
          [{type:"word", text: "Atrevete y busca los botones en las esferas..."}],
          [{type:"word", text: "No olvides hacer tu donación..."}]
        ]}
        /> 
      </div>
      
      <ThreeScene> 
        <color attach="background" args={['#161c24']}  /> 
        <Html 
        sprite
        distanceFactor={10}
        position={[-6, 0, 0]}>
           <ModalDialog />
        </Html>
        <Sphere />

        <Html
        sprite
        distanceFactor={20}
        position={[3, 0, 2]}>
         <ModalDialog2 />
        </Html>
        <Sphere2 />
        
        <Html
        sprite
        distanceFactor={20}
        position={[-13, 4, 12]}>
        <ModalDialog3 />
        </Html>
        <Sphere3 />

        <Html
        sprite
        distanceFactor={20}
        position={[18, 4, 0]}>
          <ModalDialog4 />
        </Html>
         <Sphere4 />

         <Html
        sprite
        distanceFactor={20}
        position={[-20, 0, 0]}>
          <ModalDialog5 />
        </Html>
        <Sphere5 />

        <PerspectiveCamera 
        makeDefault
        position={[18, 4, 0]}
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
