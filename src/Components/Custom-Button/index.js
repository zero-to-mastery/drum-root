import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  color: ${props => (props.color ? props.color : "#000")};
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  border: 0.2rem solid ${props => (props.color ? props.color : "#000")};
  border-radius: 0.2rem;
  background-color: ${props => (props.bgColor ? props.bgColor : "#000")};
`;

const CustomButton = ({ title, className, color, bgColor }) => (
  <Button color={color} className={className} bgColor={bgColor}>
    {title}
  </Button>
);

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
};

export default CustomButton;
