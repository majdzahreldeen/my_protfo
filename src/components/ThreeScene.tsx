import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Mesh, Vector3 } from 'three'
import { OrbitControls, Preload, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function FloatingMesh({ pulseRef }: { pulseRef?: React.MutableRefObject<number> }) {
  const ref = useRef<Mesh>(null!)
  const baseScale = 1
  useFrame((_, delta) => {
    // pulseRef can be set to a value > 0 to trigger a short pulse that decays
    if (pulseRef && pulseRef.current > 0) {
      const amount = pulseRef.current
      ref.current.scale.setScalar(baseScale + amount * 0.24)
      pulseRef.current = Math.max(0, pulseRef.current - delta * 2.2)
    } else {
      ref.current.scale.setScalar(baseScale)
    }

    ref.current.rotation.x += delta * 0.2
    ref.current.rotation.y += delta * 0.3
    ref.current.position.y = Math.sin(Date.now() / 600) * 0.12
  })
  return (
    <mesh ref={ref} castShadow>
      <torusKnotGeometry args={[1, 0.32, 256, 64]} />
      <meshStandardMaterial color="#7c3aed" roughness={0.15} metalness={0.8} />
    </mesh>
  )
}

function CameraParallax() {
  const { camera, gl } = useThree()
  const vec = new Vector3()
  const [target] = useState({ x: 0, y: 0 })

  // pointer move listener
  gl.domElement.style.touchAction = 'none'
  window.addEventListener('pointermove', (e) => {
    const w = window.innerWidth
    const h = window.innerHeight
    target.x = (e.clientX - w / 2) / w
    target.y = (e.clientY - h / 2) / h
  })

  useFrame(() => {
    // smooth camera movement
    camera.position.x += (target.x * 0.6 - camera.position.x) * 0.05
    camera.position.y += (-target.y * 0.8 - camera.position.y) * 0.05
    camera.lookAt(vec.set(0, 0, 0))
  })
  return null
}

export default function ThreeScene({ sceneKey = 'home' }: { sceneKey?: string }) {
  // sceneKey prop can be used to trigger brief responses when routes change
  const pulseRef = useRef(0)

  // increment pulseRef when sceneKey changes
  const lastKey = useRef(sceneKey)
  if (lastKey.current !== sceneKey) {
    lastKey.current = sceneKey
    pulseRef.current = 1.0 // start a pulse
  }

  // FloatingMesh reads pulseRef.current to do a quick scale/rotation effect
  return (
    <div className="w-full h-96 sm:h-[520px]" style={{ background: 'linear-gradient(180deg,#040915 0%, #001226 100%)' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} shadows>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.35} />

        <FloatingMesh pulseRef={pulseRef} />

        {/* subtle sparkles / particle field */}
        <Sparkles size={4} scale={[8, 4, 8]} position={[0, 0, -2]} speed={0.5} count={40} />

        <CameraParallax />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} enablePan={false} />
        <Preload all />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={0.6} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
