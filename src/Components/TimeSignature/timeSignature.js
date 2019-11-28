import React, { useState } from "react";
import styled from "styled-components";

const TimeSigStyle = styled.div`
  display: flex;
  flex-direction: row;
  input {
    width: 3.375rem;
    height: 1.875rem;
    margin: 1rem;

    background: rgba(0, 0, 0, 0.05);
    border-radius: 2.4375rem;
  }
`;

const TimeSignature = ({ setBeatDivision, setBeatsMeasure }) => {
  return (
    <>
      <TimeSigStyle>
        <p>Time Signature: </p>
        <input
          type="button"
          value="2/4"
          onClick={() => {
            setBeatsMeasure(2);
            setBeatDivision(4);
          }}
        />
        <input
          type="button"
          value="3/4"
          onClick={() => {
            setBeatsMeasure(3);
            setBeatDivision(4);
          }}
        />
        <input
          type="button"
          value="4/4"
          onClick={() => {
            setBeatsMeasure(4);
            setBeatDivision(4);
          }}
        />
        <input
          type="button"
          value="6/8"
          onClick={() => {
            setBeatsMeasure(6);
            setBeatDivision(8);
          }}
        />
      </TimeSigStyle>
    </>
  );
};

export default TimeSignature;
