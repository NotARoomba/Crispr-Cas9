/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: LucasPresoto (https://sketchfab.com/LucasPresoto)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dna-547d42f6c0184232a945051b6952a39e
Title: DNA
*/

import * as THREE from "three";
import { createRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    DNA_Material_0001: THREE.Mesh;
  };
  materials: {
    "Material.002": THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/dna.glb") as GLTFResult;
  const groupRef = createRef<THREE.Group<THREE.Object3DEventMap>>();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01;
    }
  });
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["DNA_Material_0001"].geometry}
            material={materials["Material.002"]}
            position={[0, 1899.999, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dna.glb");
