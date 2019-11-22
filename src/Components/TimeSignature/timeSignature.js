import React, { useState } from "react";

import styled from "styled-components";

const TimeSigStyle = styled.div`
  display: flex;
  flex-direction: row;
  input {
    width: 25px;
    height: 25px;
    font-size: 16px;
    text-align: end;
    margin: 10px;
  }
`;

const TimeSignature = ({
  beatDivision,
  beatsMeasure,
  setBeatDivision,
  setBeatsMeasure
}) => {
  return (
    <>
      <TimeSigStyle>
        <p>Time Signature: </p>
        <input
          type="number"
          onChange={e => setBeatsMeasure(e.target.value)}
          value={beatsMeasure}
          label="Time Signature"
        />
        <p>/</p>
        <input
          type="number"
          onChange={e => setBeatsMeasure(e.target.value)}
          value={beatDivision}
          label="Time Signature"
        />
      </TimeSigStyle>
    </>
  );
};

export default TimeSignature;
