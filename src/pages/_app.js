import React from "react";
import App from "next/app";
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { signout } from "../utils/common-functions";
import ErrorBoundary from "../Components/ErrorBoundary";
import Logo from "../resources/icons/snare-drum.svg";

const BodyStyling = createGlobalStyle`
  body {
    a{ 
      text-decoration: none;
      color: black
    }
  }
`;

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
      <ErrorBoundary>
        <BodyStyling />
        <PageWrapper>
          <header>
            <Logo />
            <HeaderStyling>
              <Link href="/">
                <a href="/">
                  <h1>Drum Root</h1>
                </a>
              </Link>
              <Button onClick={signout}>Sign Out</Button>
            </HeaderStyling>
          </header>
          <Component {...pageProps} />
        </PageWrapper>
      </ErrorBoundary>
    );
  }
}

export default MyApp;
