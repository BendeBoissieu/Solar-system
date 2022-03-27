import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import PlutoDayMap from "images/textures/pluto/plutomap.jpg";
import PlutoNormalMap from "images/textures/pluto/plutobump.jpg";

import { COEFFICIENT_SCALE_AFTER_EARTH } from "../../constants/global";

export function Pluto(props) {
  const plutoRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      plutoRef.current.rotation.y = ((plutoRef.current.rotation.y + 246 * Math.PI /60000)  % (Math.PI * 2))
      plutoRef.current.position.x = 4630.3 * COEFFICIENT_SCALE_AFTER_EARTH *  Math.cos(plutoRef.current.rotation.y)
      plutoRef.current.position.z = 4630.3 * COEFFICIENT_SCALE_AFTER_EARTH * Math.sin(plutoRef.current.rotation.y)
    }, 10);
    return () => clearInterval(interval);
  }, []);


  const [plutoDayMap, plutoNormalMap] = useLoader(
    TextureLoader,
    [PlutoDayMap, PlutoNormalMap]
  )

  return (
    <>
      <mesh onClick={() => props.handleClick("pluto")}
            ref={plutoRef}
            onPointerOver={() => props.setHovered(true)}
            onPointerOut={() => props.setHovered(false)}
            position={[4630.3 * COEFFICIENT_SCALE_AFTER_EARTH,0,- 4630.3 * COEFFICIENT_SCALE_AFTER_EARTH]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial map={plutoDayMap} normalMap={plutoNormalMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  )
}
