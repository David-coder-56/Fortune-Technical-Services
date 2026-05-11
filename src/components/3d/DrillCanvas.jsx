import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshDistortMaterial, Torus, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

function DrillBit() {
  const groupRef = useRef()
  const torusRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.4
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.08
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.12
    torusRef.current.rotation.x = t * 1.2
  })

  return (
    <group ref={groupRef}>
      {/* Main drill shaft */}
      <Cylinder args={[0.08, 0.14, 3.2, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#4B5563"
          metalness={0.95}
          roughness={0.1}
        />
      </Cylinder>

      {/* Drill tip */}
      <mesh position={[0, -1.9, 0]}>
        <coneGeometry args={[0.14, 0.5, 32]} />
        <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Spiral flutes */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 0.15,
            -0.8 + i * 0.4,
            Math.sin((i / 6) * Math.PI * 2) * 0.15,
          ]}
        >
          <boxGeometry args={[0.06, 0.35, 0.06]} />
          <meshStandardMaterial color="#6B7280" metalness={0.85} roughness={0.2} />
        </mesh>
      ))}

      {/* Decorative rings */}
      {[-0.6, 0, 0.6].map((y, i) => (
        <Torus key={i} args={[0.18, 0.025, 16, 64]} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.1} />
        </Torus>
      ))}

      {/* Glowing core */}
      <Cylinder args={[0.04, 0.04, 3, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#F59E0B"
          emissive="#F59E0B"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </Cylinder>
    </group>
  )
}

function TorusRing() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.3
    ref.current.rotation.z = state.clock.elapsedTime * 0.2
  })
  return (
    <Torus ref={ref} args={[1.8, 0.015, 16, 200]}>
      <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
    </Torus>
  )
}

function ParticleField() {
  const ref = useRef()
  const count = 80
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4
  }
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.05
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#F59E0B" transparent opacity={0.6} />
    </points>
  )
}

export default function DrillCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -2, -3]} intensity={0.5} color="#F59E0B" />
      <pointLight position={[0, 0, 3]} intensity={1} color="#F59E0B" distance={8} />

      <Suspense fallback={null}>
        <DrillBit />
        <TorusRing />
        <ParticleField />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
