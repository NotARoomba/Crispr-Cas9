/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Lauri Purhonen (https://sketchfab.com/LauriPurhonen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/animal-cell-downloadable-ddc40bb0900544959f02d3ff83c32615
Title: Animal cell - Downloadable
*/

import * as THREE from 'three'
import React, { createRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Sphere001_0: THREE.Mesh
    Sphere002_0: THREE.Mesh
    Icosphere_0: THREE.Mesh
    BezierCurve_0: THREE.Mesh
    BezierCurve002_0: THREE.Mesh
    Sphere_0: THREE.Mesh
    Roundcube000_0: THREE.Mesh
    Roundcube001_0: THREE.Mesh
    Roundcube_0: THREE.Mesh
    Icosphere002_0: THREE.Mesh
    Sphere005_0: THREE.Mesh
  }
  materials: {
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cell.glb') as GLTFResult
  const groupRef = createRef<THREE.Group<THREE.Object3DEventMap>>();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.z += 0.01;
    }
  })
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_0.geometry}
          material={materials['Material.004']}
          position={[0.197, 0.288, 0]}
          scale={[1.191, 1.266, 1.266]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_0.geometry}
          material={materials['Material.008']}
          position={[-0.38, -3.265, 0.024]}
          rotation={[-0.001, -0.056, 3.059]}
          scale={[0.052, 0.045, 0.045]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_0.geometry}
          material={materials['Material.001']}
          position={[-0.389, 0.611, -0.005]}
          scale={1.144}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve_0.geometry}
          material={materials['Material.005']}
          position={[-0.389, 0.611, -0.005]}
          scale={1.144}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve002_0.geometry}
          material={materials['Material.006']}
          position={[1.149, -2.199, -0.365]}
          rotation={[0, 0, 0.757]}
          scale={0.415}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0.geometry}
          material={materials.Material}
          position={[0.197, 0.202, -0.127]}
          scale={[1.129, 1.201, 1.201]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube000_0.geometry}
          material={materials['Material.011']}
          position={[1.92, 0.201, -0.209]}
          rotation={[0.012, -0.039, 1.65]}
          scale={0.193}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube001_0.geometry}
          material={materials['Material.009']}
          position={[-0.379, 0.554, 0.199]}
          scale={0.258}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube_0.geometry}
          material={materials['Material.010']}
          position={[-0.384, 0.619, -0.004]}
          scale={0.975}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_0.geometry}
          material={materials['Material.003']}
          position={[-0.389, 0.611, -0.005]}
          scale={1.144}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_0.geometry}
          material={materials['Material.007']}
          position={[-0.38, -3.265, 0.024]}
          rotation={[-0.001, -0.056, 3.059]}
          scale={[0.052, 0.045, 0.045]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/cell.glb')