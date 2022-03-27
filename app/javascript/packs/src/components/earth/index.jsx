import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "images/textures/earth/2k_earth_day_map.jpg";
import EarthNormalMap from "images/textures/earth/2k_earth_normal_map.jpg";
import EarthSpecularMap from "images/textures/earth/2k_earth_specular_map.jpg";
import EarthCloudsMap from "images/textures/earth/earth_clouds.jpg";

import MoonNormalMap from "images/textures/moon/2k_moon_bump.jpg";
import MoonDayMap from "images/textures/moon/2k_moon_map.jpg";

import { COEFFICIENT_SCALE } from "../../constants/global";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap, moonColorMap, moonNormalMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, MoonDayMap, MoonNormalMap]
  )

  const eartMoonRef = useRef();

  const earthRef = useRef();
  const cloudRef = useRef();

  const moonRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      eartMoonRef.current.rotation.y = ((eartMoonRef.current.rotation.y + Math.PI /6000)  % (Math.PI * 2))
      eartMoonRef.current.position.x = 116.92 * COEFFICIENT_SCALE * Math.cos(eartMoonRef.current.rotation.y)
      eartMoonRef.current.position.z = 116.92 * COEFFICIENT_SCALE * Math.sin(eartMoonRef.current.rotation.y)
      earthRef.current.rotation.y = ((earthRef.current.rotation.y + Math.PI /250)  % (Math.PI * 2))
      moonRef.current.position.x = 27.9 * COEFFICIENT_SCALE * Math.cos(earthRef.current.rotation.y)
      moonRef.current.position.z = 27.9 * COEFFICIENT_SCALE * Math.sin(earthRef.current.rotation.y)
      //moonRef.current.position.x = earthRef.current.position.x + 27.9
      //moonRef.current.position.z = earthRef.current.position.z + 27.9
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <mesh ref={cloudRef} position={[0,0,0]}>
      <sphereGeometry args={[1.005, 64, 64]} />
      <meshPhongMaterial map={cloudsMap} opacity={0.4} deptWrite={true} transparent={true} side={THREE.DoubleSide}/>
     </mesh> */}
      <group ref={eartMoonRef} position={[116.92 * COEFFICIENT_SCALE,0,0]} rotation={[0,0,0]}>
        <mesh onClick={() => props.handleClick("moon")}
              onPointerOver={() => props.setHovered(true)}
              onPointerOut={() => props.setHovered(false)}
              ref={moonRef}>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshStandardMaterial map={moonColorMap} normalMap={moonNormalMap} metalness={0.4} roughness={0.7} />
        </mesh>
        <mesh onClick={() => props.handleClick("earth")}
              onPointerOver={() => props.setHovered(true)}
              onPointerOut={() => props.setHovered(false)}
              ref={earthRef}>
          <sphereGeometry args={[10, 32, 32]} />
          <meshPhongMaterial specularMap={specularMap}/>
          <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
        </mesh>
      </group>
    </>
  )
}
