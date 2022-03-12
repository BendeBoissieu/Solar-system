import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./components/AnimatedSphere";

export default function App() {
  return (
    <Wrapper className="App">
      <Title>Three.js in React and Ruby on rails</Title>
      <Canvas clasName="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, #322d6d 6%, #663182 40%);

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