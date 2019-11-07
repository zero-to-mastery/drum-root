import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import {
  withKnobs,
  text,
  boolean,
  number,
  array
} from "@storybook/addon-knobs";

const stories = storiesOf("DrumPad", module);

stories.add("Drum pad style", () => {
  const divStyle = {
    width: "30px",
    height: "30px"
  };
  // lines 15 to 25 exist only for testing no need to implement in the main code
  const tableRowLabel = "trNum";
  const tableColLabel = "tdNum";
  const defaultTableRow = ["Red", "Blue"];
  const defaultTableCol = ["Red"];
  let tableRow = array(tableRowLabel, defaultTableRow);
  let tableCol = array(tableColLabel, defaultTableCol);
  const label = "has beat?";
  const hasBeatDefault = false;
  const hasBeat = boolean(label, hasBeatDefault); // for filling the div with something

  return (
    <div className="container ">
      <table className="table table-dark table-bordered w-50 mx-auto">
        <tbody>
          {tableRow.map((
            data1 // you can add any functionality for tr`s
          ) => (
            <tr key={data1}>
              {tableCol.map((
                data2 // // you can add any functionality for td`s
              ) => (
                <td key={data2}>
                  <div style={divStyle} className="mx-auto">
                    {hasBeat ? data2 : ""}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

stories.addDecorator(withKnobs);
