import React from 'react';
import logo from '../../resources/logos/logo_image.jpg';
import { Overlay, LogoContainer, LogoImage } from './SplashScreen.styles';

const SplashScreen = () => (
  <Overlay>
    <LogoContainer>
      <LogoImage src={logo} alt="logo-beating" />
    </LogoContainer>
  </Overlay>
);

export default SplashScreen;
