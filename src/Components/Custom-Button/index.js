import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const button = styled.button`
  color: #aa3939;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 3px solid #aa3939;
  border-radius: 5px;
`;

CustomButton.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};

const CustomButton = ({ title, className }) => {
  return <button className={className}>{title}</button>;
};

export default CustomButton;
