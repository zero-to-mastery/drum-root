import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleContainer = styled.div`
  border: 0.063rem solid black;
  width: 12.5rem;
  text-align: center;
  height: 6.25rem;
  padding: 0.625rem;
`;

const TitleLink = styled.a`
  border: 0.063rem solid black;
  padding: 0.313rem;
`;

const LoopTile = ({ title, href }) => (
  <TitleContainer className="title-container">
    <TitleLink href={href}>{title}</TitleLink>
  </TitleContainer>
);

LoopTile.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string
};

export default LoopTile;
