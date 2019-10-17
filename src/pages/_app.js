import React from "react";
import App from "next/app";
import styled from "styled-components";
import { signout } from "../utils/common-functions";

const PageWrapper = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 80rem;
`;

const HeaderStyling = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  max-height: 2rem;
  margin: auto 0;
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PageWrapper>
        <header>
          <HeaderStyling>
            <h1>Drum Root</h1>
            <Button onClick={signout}>Sign Out</Button>
          </HeaderStyling>
        </header>
        <Component {...pageProps} />
      </PageWrapper>
    );
  }
}

export default MyApp;
