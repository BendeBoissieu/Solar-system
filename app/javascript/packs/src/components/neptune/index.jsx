import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import NeptuneDayMap from "images/textures/neptune/neptunemap.jpg";

import { COEFFICIENT_SCALE_AFTER_EARTH } from "../../constants/global";

export function Neptune(props) {
  const neptuneRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      neptuneRef.current.rotation.y = ((neptuneRef.current.rotation.y + 164.8 * Math.PI /600000)  % (Math.PI * 2))
      neptuneRef.current.position.x = 3511.6 * COEFFICIENT_SCALE_AFTER_EARTH * Math.cos(neptuneRef.current.rotation.y)
      neptuneRef.current.position.z = 3511.6 * COEFFICIENT_SCALE_AFTER_EARTH * Math.sin(neptuneRef.current.rotation.y)
    }, 10);
    return () => clearInterval(interval);
  }, []);


  const [neptuneDayMap] = useLoader(
    TextureLoader,
    [NeptuneDayMap]
  )

  return (
    <>
      <mesh onClick={() => props.handleClick("neptune")}
            ref={neptuneRef}
            onPointerOver={() => props.setHovered(true)}
            onPointerOut={() => props.setHovered(false)}
            position={[3511.6 * COEFFICIENT_SCALE_AFTER_EARTH,0,3511.6 * COEFFICIENT_SCALE_AFTER_EARTH]}>
        <sphereGeometry args={[38.84, 32, 32]} />
        <meshStandardMaterial map={neptuneDayMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  )
}
