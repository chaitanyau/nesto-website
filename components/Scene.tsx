import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, PerspectiveCamera, Environment } from '@react-three/drei'
import { useTransform, MotionValue } from 'framer-motion'
import { MathUtils, Mesh, PerspectiveCamera as ThreePerspectiveCamera } from 'three'
import type { SceneProps } from '../types'

function Product({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const meshRef = useRef<Mesh>(null!)
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.2])

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
      const currentScale = scale.get()
      meshRef.current.scale.set(currentScale, currentScale, currentScale)
    }
  })

  return (
    <TorusKnot ref={meshRef} args={[1, 0.3, 256, 32]}>
      {/* Low roughness so HDR reflections are nice */}
      <meshStandardMaterial color="#3b82f6" metalness={0.9} roughness={0.1} />
    </TorusKnot>
  )
}

function AnimatedCamera({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const cameraRef = useRef<ThreePerspectiveCamera>(null!)

  const cameraPositions = [
    { x: 5, y: 2, z: 5 }, // start
    { x: -3, y: 4, z: 8 }, // mid
    { x: 0, y: 6, z: -5 } // end
  ]

  useFrame(() => {
    if (!cameraRef.current) return
    const camera = cameraRef.current
    const progress = scrollYProgress.get()
    let target

    if (progress < 0.5) {
      const t = MathUtils.clamp(progress / 0.5, 0, 1)
      target = {
        x: MathUtils.lerp(cameraPositions[0].x, cameraPositions[1].x, t),
        y: MathUtils.lerp(cameraPositions[0].y, cameraPositions[1].y, t),
        z: MathUtils.lerp(cameraPositions[0].z, cameraPositions[1].z, t)
      }
    } else {
      const t = MathUtils.clamp((progress - 0.5) / 0.5, 0, 1)
      target = {
        x: MathUtils.lerp(cameraPositions[1].x, cameraPositions[2].x, t),
        y: MathUtils.lerp(cameraPositions[1].y, cameraPositions[2].y, t),
        z: MathUtils.lerp(cameraPositions[1].z, cameraPositions[2].z, t)
      }
    }

    camera.position.x = MathUtils.lerp(camera.position.x, target.x, 0.1)
    camera.position.y = MathUtils.lerp(camera.position.y, target.y, 0.1)
    camera.position.z = MathUtils.lerp(camera.position.z, target.z, 0.1)
    camera.lookAt(0, 0, 0)
  })

  return <PerspectiveCamera makeDefault ref={cameraRef} position={[5, 2, 5]} fov={60} />
}

const Scene: React.FC<SceneProps> = ({ scrollYProgress }) => {
  return (
    <Canvas
      style={{ background: '#000' }} // keep it dark so HDR lighting pops
      gl={{ toneMappingExposure: 1.2 }}
    >
      {/* Just a tiny ambient light to avoid black shadows */}
      <ambientLight intensity={0.1} />

      {/* Product model */}
      <Product scrollYProgress={scrollYProgress} />

      {/* Scroll-driven camera */}
      <AnimatedCamera scrollYProgress={scrollYProgress} />

      {/* HDRI studio lighting */}
      <Environment
        files="../assets/studio_small_09_4k.hdr"
        background={true} // Keep a neutral BG instead of showing HDR
        ground={false}
      />
    </Canvas>
  )
}

export default Scene
