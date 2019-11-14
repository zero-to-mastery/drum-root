import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  &,
  th,
  git td {
    padding: 5px;
    border: 1px solid black;
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
`;

const DrumPad = ({ count, layout, swapBeat }) => {
  return (
    <Table {...{ count }}>
      <tbody>
        {layout.map(({ name, icon, beats }, rowNum) => (
          <tr key={name} onClick={() => console.log("hello")}>
            {beats.map((hasBeat, beatNum) => (
              <td
                key={beatNum}
                onClick={() => {
                  console.log({ rowNum, beatNum });
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
