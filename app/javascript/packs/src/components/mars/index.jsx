import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import MarsDayMap from "images/textures/mars/2k_mars.jpg";
import MarsNormalMap from "images/textures/mars/2k_mars_normal_map.jpg";

import { COEFFICIENT_SCALE } from "../../constants/global";

export function Mars(props) {
  const marsRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      marsRef.current.rotation.y = ((marsRef.current.rotation.y + 1.9 * Math.PI /6000)  % (Math.PI * 2))
      marsRef.current.position.x = 169.8 * COEFFICIENT_SCALE * Math.cos(marsRef.current.rotation.y)
      marsRef.current.position.z = 169.8 * COEFFICIENT_SCALE * Math.sin(marsRef.current.rotation.y)
    }, 10);
    return () => clearInterval(interval);
  }, []);


  const [marsDayMap, marsNormalMap] = useLoader(
    TextureLoader,
    [MarsDayMap, MarsNormalMap]
  )

  return (
    <>
      <mesh onClick={() => props.handleClick("mars")}
            ref={marsRef}
            onPointerOver={() => props.setHovered(true)}
            onPointerOut={() => props.setHovered(false)}
            position={[169.8 * COEFFICIENT_SCALE,0,169.8]}>
        <sphereGeometry args={[5.33, 32, 32]} />
        <meshStandardMaterial map={marsDayMap} normalMap={marsNormalMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  )
}
