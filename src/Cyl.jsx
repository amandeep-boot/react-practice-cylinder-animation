import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function Cyl() {
  const tex = useTexture("./cyl.png");
  const cyl = useRef(null);

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1.4, 0.25]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          map={tex}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default Cyl;
