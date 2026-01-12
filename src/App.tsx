import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Scene } from './components/canvas/Scene'
import { Room } from './components/canvas/Room'

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.6, 4], fov: 50 }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#050510']} />
      <Suspense fallback={null}>
        <Scene />
        <Room />
        <OrbitControls
          target={[0, 1, 0]}
          maxPolarAngle={Math.PI / 1.5}
          minDistance={1}
          maxDistance={5}
        />
      </Suspense>
    </Canvas>
  )
}

export default App
