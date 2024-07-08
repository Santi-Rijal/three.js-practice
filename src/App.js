import "./App.css";

import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  const texture = useLoader(TextureLoader, "earth_texture.jpg");

  const myMesh = React.useRef();

  return (
    <div className="container">
      <h1>Earth</h1>
      <div className="canvas-container">
        <Canvas ref={myMesh}>
          <mesh>
            <sphereGeometry args={[2, 40, 40]} />
            <meshBasicMaterial map={texture} />
          </mesh>

          <OrbitControls
            autoRotate={true}
            dampingFactor={true}
            maxDistance={8}
            minDistance={4}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default App;
