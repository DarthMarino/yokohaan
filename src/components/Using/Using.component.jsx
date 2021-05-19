import React, { useRef, Suspense } from "react";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import "./Using.css";

const Tablet = () => {
  const texture = useLoader(TextureLoader, "textures/tablet.png");
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) / 2;
    console.log(state.clock.elapsedTime);
  });
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={mesh} scale={2}>
        <boxGeometry attach="geometry" args={[2, 1, 0.2]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

const Using = () => {
  return (
    <>
      <div className="component">
        <div className="tablet">
          <Canvas>
            <Suspense fallback={null}>
              <Tablet />
            </Suspense>
          </Canvas>
        </div>
        <div className="title">
          <h1>What Im Using</h1>
        </div>
      </div>
    </>
  );
};

export default Using;
