import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  border: 1px solid black;
  width: 200px;
  text-align: center;
  height: 100px;
  padding: 10px;
`;

const TitleLink = styled.a`
  border: 1px solid black;
  padding: 5px;
`;

const LoopTile = ({ title, href }) => (
  <TitleContainer className="title-container">
    <TitleLink href={href}> {title} </TitleLink>
  </TitleContainer>
);

export default LoopTile;
