import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  &,
  th,
  td {
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

const DrumPad = ({ count, layout }) => {
  return (
    <Table {...{ count }}>
      <tbody>
        {layout.map(({ name, icon, beats }) => (
          <tr key={name}>
            {beats.map((hasBeat, idx) => (
              <td key={idx}>
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
