import React, { Suspense, useState, useEffect } from "react";
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
import { Info } from "./components/Info";
import { Loading } from "./components/Loading";

const sizes= {
  width: window.innerWidth,
  height: window.innerHeight
}
export default function App() {
  //const [state, setState] = useState({ count: 4, theme: 'blue' });
  //const count = state.count
  const [state, setState] = useState({name:'sun'});

  //mouse hover
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  // function incrementCount() {
  //   setState(prevState => {
  //     return { ...prevState, count: prevState.count + 1 }
  //   })
  // }

    function showDetails(name) {
      setState(prevState => {
        return ({name: name})
      })
    }


  return (
    <Wrapper className="App">
      <Suspense fallback={<Loading />}>
        <Info handleClick={showDetails} name={state.name}/>
        <Canvas className="canvas" orthographic camera={{ position: [0, 300, -500], zoom: 0.3, up: [0, 0, 1], far: 40000, near: -2000 }}>
          <MapControls
            minZoom={0.3}
            maxZoom={5}
          />
          <pointLight
            intensity={0.8}
            position={[0, 0, 0]}
          />
          <Sun handleClick={showDetails} setHovered={setHovered} />
          <Earth handleClick={showDetails} setHovered={setHovered} />
          <Mars handleClick={showDetails} setHovered={setHovered} />
          <Mercury handleClick={showDetails} setHovered={setHovered} />
          <Venus handleClick={showDetails} setHovered={setHovered}/>
          <Jupiter handleClick={showDetails} setHovered={setHovered} />
          <Saturn handleClick={showDetails} setHovered={setHovered} />
          <Uranus handleClick={showDetails} setHovered={setHovered} />
          <Neptune handleClick={showDetails} setHovered={setHovered} />
          <Pluto handleClick={showDetails} setHovered={setHovered} />
        </Canvas>
      </Suspense>
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