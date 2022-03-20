import React, { Suspense, useState } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { Earth } from "./components/earth";
import { Mars } from "./components/mars";
import { Mercury } from "./components/mercury";
import { Venus } from "./components/venus";
import { Jupiter } from "./components/jupiter";
import { Uranus } from "./components/uranus";
import { Saturn } from "./components/saturn/Saturn";
import { Neptune } from "./components/neptune";
import { Pluto } from "./components/pluto";
import { Sun } from "./components/sun";
import { MapControls, useHelper, OrbitControls, Stars, OrthographicCamera } from "@react-three/drei";
import { CameraHelper } from "three";


const sizes= {
  width: window.innerWidth,
  height: window.innerHeight
}


export default function App() {
  return (
    <Wrapper className="App">
      <Canvas clasName="canvas" orthographic camera={{ position: [0, 300, -500], zoom: 0.6, up: [0, 0, 1], far: 40000 }}>
          <Suspense fallback={null}>
            <MapControls
              minZoom={0.3}
              maxZoom={5}
            />

            <pointLight
              intensity={0.8}
              position={[0, 0, 0]}
            />
            <Sun/>
            <Earth />
            <Mars />
            <Mercury />
            <Venus />
            <Jupiter />
            <Saturn />
            <Uranus />
            <Neptune />
            <Pluto />
            <Stars
              radius={0.1} // Radius of the inner sphere (default=100)
              depth={1000} // Depth of area where stars should fit (default=50)
              count={20000} // Amount of stars (default=5000)
              factor={0.008} // Size factor (default=4)
              saturation={0} // Saturation 0-1 (default=0)
              fade={true} // Faded dots (default=false)
            />
        </Suspense>
      </Canvas>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg,#1b1656 6%,#511f6c 35%);
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  canvas {
    height: 500px;
  }
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  padding-top: 10rem;
`;