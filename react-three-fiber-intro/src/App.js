// import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three'
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });


const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls args={[camera, gl.domElement]} />
  )
}

const Box = props => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.00;
    ref.current.rotation.y += 0.00;
  });
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      receiveShadow
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial color='blue' />
    </mesh>
  )
}

const Floor = props => {
  return (
    <mesh {...props} >
      <boxBufferGeometry args={[10, 1, 10]} />
      <meshPhysicalMaterial />

    </mesh>
  )
}


const Bulb = props => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive='yellow' />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        shadows
        style={{ background: 'black' }}
        camera={{ position: [3, 3, 3] }}>
        <Box position={[1, 1, 1]} />
        <Orbit />
        <axesHelper args={[5]} />
        <ambientLight intensity={0.2} />
        <pointLight />
        <Bulb position={[0, 2, 0]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;