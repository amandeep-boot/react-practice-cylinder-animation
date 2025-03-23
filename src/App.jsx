import { Canvas } from '@react-three/fiber';
import React from 'react';
import './style.css';
import { OrbitControls} from '@react-three/drei';
import { Bloom ,EffectComposer,BrightnessContrast } from '@react-three/postprocessing';
import Cyl from './Cyl';

function App() {
  return (
    <Canvas flat camera={{ fov: 35, position: [0, 0, 5] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Cyl />
      <EffectComposer>
        <Bloom
          intensity={5.0} // Strength of bloom
          luminanceThreshold={0} // Brightness threshold
          luminanceSmoothing={0} // Smooth the threshold edges
          mipmapBlur // Makes the bloom look more natural
        />
        <BrightnessContrast
          brightness={0.0}  // 0 = no change, positive = brighter
          contrast={0.3}   // Increase contrast (try between 0.2 to 0.6)
        />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
