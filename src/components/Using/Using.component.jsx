import React, { useRef, Suspense } from "react";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./Using.css";
import { Euler } from "three";

const Tablet = () => {
  const gltf = useLoader(GLTFLoader, "models/tablet.glb");
  const nodes = gltf.nodes;
  const materials = gltf.materials;
  const globalPosition = [-12, -12, 0];
  const globalAxis = new Euler(0, 600, 0, "XYZ");
  const group = useRef();

  useFrame((state, delta) => {
    group.current.position.y = Math.sin(state.clock.elapsedTime) / 2;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime) / 8;
  });
  return (
    <>
      <group scale={0.5} ref={group} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["custom5(Clone)"]}
          position={globalPosition}
          rotation={globalAxis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["custom2(Clone)"]}
          position={globalPosition}
          rotation={globalAxis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["_defaultMat(Clone)"]}
          position={globalPosition}
          rotation={globalAxis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials["custom4(Clone)"]}
          position={globalPosition}
          rotation={globalAxis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials["custom3(Clone)"]}
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
