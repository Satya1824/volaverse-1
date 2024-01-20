import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

function Model({ link, onModelLoad }) {
  const groupRef = useRef();
  const { scene } = useGLTF(link);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(link, (gltf) => {
      const bbox = new THREE.Box3().setFromObject(gltf.scene);
      const center = bbox.getCenter(new THREE.Vector3());

      if (groupRef.current) {
        groupRef.current.position.x = -center.x;
        groupRef.current.position.y = -center.y;
        groupRef.current.position.z = -center.z;
      }

      onModelLoad();
    });
  }, [link, onModelLoad]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function ModelViewer({ data, onModelLoad }) {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [z, setZ] = useState();
  const [f, setF] = useState();

  useEffect(() => {
    setX(data?.position_x);
    setY(data?.position_y);
    setZ(data?.position_z);
    setF(data?.fov);
  }, [data]);

  return (
    <Canvas
      pixelRatio={[1, 4]}
      camera={{
        position: [x, y, z],
        fov: f,
      }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model link={data?.media_path} onModelLoad={onModelLoad} />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
