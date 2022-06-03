import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/eart1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
    </group>
  )
}

useGLTF.preload('/assets/eart1.gltf')