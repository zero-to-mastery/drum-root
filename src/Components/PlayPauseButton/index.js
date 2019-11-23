import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlayCircle } from "styled-icons/boxicons-regular/PlayCircle";
import { PauseCircle } from "styled-icons/boxicons-regular/PauseCircle";

const Button = styled.button`
  color: ${props => (props.color ? props.color : "#000")};
  background-color: Transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const PlayPauseButton = ({ isPlay, color, size = 48, ...rest }) => {
  return (
    <Button {...rest} color={color}>
      {isPlay ? <PlayCircle size={size} /> : <PauseCircle size={size} />}
    </Button>
  );
};

PlayPauseButton.propTypes = {
  isPlay: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number
};

export default PlayPauseButton;
