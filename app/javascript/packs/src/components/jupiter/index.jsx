import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import JupiterDayMap from "images/textures/jupiter/jupitermap.jpg";

import { COEFFICIENT_SCALE_AFTER_EARTH } from "../../constants/global";

export function Jupiter(props) {
  const jupiterRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      jupiterRef.current.rotation.y = ((jupiterRef.current.rotation.y + 1.19 * Math.PI /6000)  % (Math.PI * 2))
      jupiterRef.current.position.x = 584.6 * COEFFICIENT_SCALE_AFTER_EARTH * Math.cos(jupiterRef.current.rotation.y)
      jupiterRef.current.position.z = 584.6 * COEFFICIENT_SCALE_AFTER_EARTH * Math.sin(jupiterRef.current.rotation.y)
    }, 10);
    return () => clearInterval(interval);
  }, []);


  const [jupiterDayMap] = useLoader(
    TextureLoader,
    [JupiterDayMap]
  )

  return (
    <>
      <mesh onClick={(e) => console.log("click Jupiter")} ref={jupiterRef} position={[584.6 * COEFFICIENT_SCALE_AFTER_EARTH,0,584.6 * COEFFICIENT_SCALE_AFTER_EARTH]}>
        <sphereGeometry args={[109.7, 32, 32]} />
        <meshStandardMaterial map={jupiterDayMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  )
}
