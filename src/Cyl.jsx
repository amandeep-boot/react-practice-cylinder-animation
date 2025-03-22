import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function Cyl() {
  let tex = useTexture("./cyl.png");
  return (
    <mesh>
      <cylinderGeometry args={[1, 1, 1, 40, 40, true]} />
      <meshStandardMaterial
        map={tex}
        transparent={true}
        alphaTest={0.5}
        side={THREE.DoubleSide}
      />
      

    </mesh>
  );
}

export default Cyl;
