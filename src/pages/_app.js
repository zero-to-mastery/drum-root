import React from "react";
import App from "next/app";
import { signout } from "../utils/common-functions";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <h1>Drum Root</h1>
        <p onClick={signout}>Sign Out</p>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
