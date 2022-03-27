import React, { useRef, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import MercuryDayMap from "images/textures/mercury/mercurymap.jpg";
import MercuryNormalMap from "images/textures/mercury/mercurybump.jpg";

import { COEFFICIENT_SCALE } from "../../constants/global";

export function Mercury(props) {
  const mercuryRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      mercuryRef.current.rotation.y = ((mercuryRef.current.rotation.y + 0.24 * Math.PI / 600)  % (Math.PI * 2))
      mercuryRef.current.position.x = 48.82 * COEFFICIENT_SCALE * Math.cos(mercuryRef.current.rotation.y)
      mercuryRef.current.position.z = 48.82 * COEFFICIENT_SCALE * Math.sin(mercuryRef.current.rotation.y)
    }, 10);
    return () => clearInterval(interval);
  }, []);


  const [mercuryDayMap, mercuryNormalMap] = useLoader(
    TextureLoader,
    [MercuryDayMap, MercuryNormalMap]
  )

  return (
    <>
      <mesh onClick={() => props.handleClick("mercury")}
            ref={mercuryRef}
            onPointerOver={() => props.setHovered(true)}
            onPointerOut={() => props.setHovered(false)}
            position={[48.82 * COEFFICIENT_SCALE,0,48.82 * COEFFICIENT_SCALE]}>
        <sphereGeometry args={[3.8, 32, 32]} />
        <meshStandardMaterial map={mercuryDayMap} normalMap={mercuryNormalMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  )
}
