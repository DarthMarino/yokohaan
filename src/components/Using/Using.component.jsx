import React, { useRef, useState, Suspense } from "react";
import { TweenMax } from "gsap";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./Using.css";
import { Euler } from "three";

const Tablet = () => {
  const [, setHover] = useState(null);
  const [, setTilt] = useState(null);
  const gltf = useLoader(GLTFLoader, "models/tablet.glb");
  const nodes = gltf.nodes;
  const globalPosition = [-15, -12, -5];
  const globalAxis = new Euler(0, 600, 0, "XYZ");
  const group = useRef();

  useFrame((state) => {
    setHover(
      TweenMax.to(group.current.position, {
        y: Math.sin(2 * state.clock.elapsedTime) / 2,
        repeat: -1,
        ease: "circ",
      })
    );
    setTilt(
      TweenMax.to(group.current.rotation, {
        y: Math.sin(1.5 * state.clock.elapsedTime) / 8,
        repeat: -1,
        ease: "stepped",
      })
    );
  });

  return (
    <>
      <group ref={group} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          position={globalPosition}
          rotation={globalAxis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={nodes.mesh_0_1.material}
          position={globalPosition}
          rotation={globalAxis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={nodes.mesh_0_2.material}
          position={globalPosition}
          rotation={globalAxis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={nodes.mesh_0_3.material}
          position={globalPosition}
          rotation={globalAxis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={nodes.mesh_0_4.material}
          position={globalPosition}
          rotation={globalAxis}
        />
      </group>
    </>
  );
};

const Using = () => {
  return (
    <>
      <div className="model-component">
        <div className="tablet">
          <Canvas
            camera={{
              aspect: window.innerWidth / window.innerHeight,
              position: [0, 0, 10],
            }}
          >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Tablet />
            </Suspense>
          </Canvas>
        </div>
        <div className="right-title">
          <h1>What Im Using</h1>
        </div>
      </div>
    </>
  );
};

export default Using;
