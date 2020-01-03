// See https://reactjs.org/docs/error-boundaries.html
import { logError } from "../../utils/common-functions";
import React, { Component } from "react";
import Error from "../Error";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error ? <Error {...{ error }} /> : children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ErrorBoundary;
