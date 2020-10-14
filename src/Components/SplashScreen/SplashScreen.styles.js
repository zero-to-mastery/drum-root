import styled, { keyframes } from 'styled-components';

const infiniteBeat = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 20vw;
  height: 40vh;
  animation: ${infiniteBeat} 0.5s ease-in infinite;
`;

export const LogoImage = styled.img`
  width: 100%;
  max-height: 100%;
`;
