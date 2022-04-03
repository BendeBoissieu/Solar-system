import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useHelper, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import SunMap from "images/textures/sun/2k_sun.jpg";

export function Sun(props) {
  const sunRef = useRef();
  const [colorMap] = useLoader(
    TextureLoader,
    [SunMap]
  )

  return (
    <>
      <mesh onClick={() => props.handleClick("sun")}
            onPointerOver={() => props.setHovered(true)}
            onPointerOut={() => props.setHovered(false)}
            ref={sunRef} position={[0,0,0]}>
        <ambientLight intensity={0.6} />
        <sphereGeometry args={[40, 32, 32]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  )
}
