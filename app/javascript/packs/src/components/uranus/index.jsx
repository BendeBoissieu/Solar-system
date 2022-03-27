import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import UranusDayMap from "images/textures/uranus/uranusmap.jpg";

import { COEFFICIENT_SCALE_AFTER_EARTH } from "../../constants/global";

export function Uranus(props) {
  const uranusRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      uranusRef.current.rotation.y = ((uranusRef.current.rotation.y + 84 * Math.PI /600000)  % (Math.PI * 2))
      uranusRef.current.position.x = 2313.6 * COEFFICIENT_SCALE_AFTER_EARTH * Math.cos(uranusRef.current.rotation.y)
      uranusRef.current.position.z = 2313.6 * COEFFICIENT_SCALE_AFTER_EARTH * Math.sin(uranusRef.current.rotation.y)
    }, 10);
    return () => clearInterval(interval);
  }, []);


  const [uranusDayMap] = useLoader(
    TextureLoader,
    [UranusDayMap]
  )

  return (
    <>
      <mesh onClick={() => props.handleClick("uranus")}
            onPointerOver={() => props.setHovered(true)}
            onPointerOut={() => props.setHovered(false)}
            ref={uranusRef} position={[2313.6 * COEFFICIENT_SCALE_AFTER_EARTH,0,2313.6 * COEFFICIENT_SCALE_AFTER_EARTH]}>
        <sphereGeometry args={[40.1, 32, 32]} />
        <meshStandardMaterial map={uranusDayMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  )
}
