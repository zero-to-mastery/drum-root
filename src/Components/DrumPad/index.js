import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  &,
  th,
  git td {
    padding: 0.3125rem;
    border: 0.125rem solid black;
  }
  td {
    width: 2rem;
    height: 2rem;
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  td:nth-of-type(${({ count }) => count}) {
    background-color: yellow;
  }
  td:nth-of-type(${({ beatsMeasure }) => beatsMeasure}n) {
    border-right: 0.125rem solid black;
  }
`;

const DrumPad = ({ count, layout, swapBeat, beatsMeasure }) => {
  return (
    <Table {...{ count, beatsMeasure }}>
      <tbody>
        {layout.map(({ name, icon, beats }, rowNum) => (
          <tr key={name} >
            {beats.map((hasBeat, beatNum) => (
              <td
                key={beatNum}
                onClick={() => {
                  swapBeat(rowNum, beatNum);
                }}
              >
                {hasBeat ? (
                  <span role="img" aria-label={name}>
                    {icon}
                  </span>
                ) : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DrumPad;
