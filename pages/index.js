import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

const PageWrapper = styled.div`
  background: #5c1f5c;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const WelcomeModal = styled.div`
  background: #7d3d8f;
  padding: 100px;
  border: 5px solid #7f478f;
  border-radius: 55px;
  height: 300px;
  width: 500px;
  margin: auto;
`

const BeginButton = styled.button`
  width: 200px;
  height: 80px;
  background: #8a3f57;
`

export default function Home() {
  const router = useRouter();
  
  function redirectCallback(){
    router.push('animatrix')
  }

  return (
    <>
      <Head>
        <title>Mina.js</title>
      </Head>
      <PageWrapper>
        <WelcomeModal>
          Hi World 
          <BeginButton onClick={redirectCallback}>Click me!</BeginButton>
        </WelcomeModal>
      </PageWrapper>
    </>
  )
}
