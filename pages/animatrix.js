import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/box'

const PageWrapper = styled.div`
  background: #5c1f5c;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextModule = styled.div`
  background: #7d3d8f;
  padding: 100px;
  border: 5px solid #7f478f;
  border-radius: 55px;
  height: 300px;
  width: 500px;
  margin: auto;
`

export default function Animatrix() {  

  return (
    <PageWrapper>
      <TextModule>
        <Canvas camera={{ position: [0, 0, 35] }}>
          <ambientLight intensity={2} />
          <pointLight position={[40, 40, 40]} />
            <Box position={[10, 0, 0]} />
            <Box position={[-10, 0, 0]} />
            <Box position={[0, 10, 0]} />
            <Box position={[0, -10, 0]} />
          <OrbitControls />
        </Canvas>
      </TextModule>
    </PageWrapper>
  )
}
