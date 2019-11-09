import React from 'react'
import styled from 'styled-components'
import { keyframes } from '@emotion/core'

const rotateWrapp = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const rotateDot = keyframes`
 80%, 100% {
    transform: rotate(360deg); 
  } 
`

const dotBefore = keyframes`
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
`

const Wrapper = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  animation:${rotateWrapp} 2.5s infinite linear both;
`

const SkChaseDot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: ${rotateDot} 2.0s infinite ease-in-out both; 
  animation-delay: ${props => props.animationDelay};

&:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: red;
  border-radius: 100%;
  animation: ${dotBefore} 2.0s infinite ease-in-out both;
  animation-delay: ${props => props.animationDelay};
}
`



const Loader = () => {
  return (
    <Wrapper>
      <SkChaseDot animationDelay="-1.1s" />
      <SkChaseDot animationDelay="-1.0s" />
      <SkChaseDot animationDelay="-0.9s" />
      <SkChaseDot animationDelay="-0.8s" />
      <SkChaseDot animationDelay="-0.7s" />
      <SkChaseDot animationDelay="-0.6s" />
    </Wrapper>
  )
}

export default Loader
