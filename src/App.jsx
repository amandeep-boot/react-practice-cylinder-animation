import { Canvas } from '@react-three/fiber';
import React from 'react'
import './style.css'
import { OrbitControls} from '@react-three/drei';

import Cyl from './Cyl';

function App() {
  // useTexture()
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight />
      <Cyl />
    </Canvas>
  )
}

export default App; 