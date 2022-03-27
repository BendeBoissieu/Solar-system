import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import VenusDayMap from "images/textures/venus/venusmap.jpg";
import VenusNormalMap from "images/textures/venus/venusbump.jpg";

import { COEFFICIENT_SCALE } from "../../constants/global";

export function Venus(props) {
  const venusRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      venusRef.current.rotation.y = ((venusRef.current.rotation.y + 0.61 * Math.PI / 6000)  % (Math.PI * 2))
      venusRef.current.position.x = 84.9 * COEFFICIENT_SCALE * Math.cos(venusRef.current.rotation.y)
      venusRef.current.position.z = 84.9 * COEFFICIENT_SCALE * Math.sin(venusRef.current.rotation.y)
    }, 10);
    return () => clearInterval(interval);
  }, []);


  const [venusDayMap, venusNormalMap] = useLoader(
    TextureLoader,
    [VenusDayMap, VenusNormalMap]
  )

  return (
    <>
      <mesh onClick={() => props.handleClick("venus")}
            onPointerOver={() => props.setHovered(true)}
            onPointerOut={() => props.setHovered(false)}
            ref={venusRef} position={[-84.9 * COEFFICIENT_SCALE,0,84.9 * COEFFICIENT_SCALE]}>
        <sphereGeometry args={[9.49, 32, 32]} />
        <meshStandardMaterial map={venusDayMap} normalMap={venusNormalMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  )
}
