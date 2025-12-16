import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { OrbitControls, Preload } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function AnimatedMesh() {
  const ref = useRef<Mesh>(null!)
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.2
    ref.current.rotation.y += delta * 0.3
  })
  return (
    <mesh ref={ref} castShadow>
      <torusKnotGeometry args={[1, 0.35, 256, 64]} />
      <meshStandardMaterial color="#7c3aed" roughness={0.2} metalness={0.6} />
    </mesh>
  )
}

export default function ThreeScene() {
  return (
    <div className="w-full h-96 sm:h-[520px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} shadows>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />

        <AnimatedMesh />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        <Preload all />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={0.6} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
