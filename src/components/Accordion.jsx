import React, { useState } from "react";
import data from "../assets/data";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultipal] = useState([]);

  const handleSelected = (getCurrentId) => {
    setSelected((selected) =>
      selected !== getCurrentId ? getCurrentId : null,
    );
  };

  const handleMutiSelection = (getCurrentId) => {
    let cpyMutiple = [...multiple];

    const findIndexId = cpyMutiple.indexOf(getCurrentId);
    if (findIndexId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexId, 1);

    setMultipal(cpyMutiple);

    console.log(findIndexId);
  };

  console.log(selected, multiple);

  return (
    <div>
      <div className="accordion">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Open All
        </button>

        {data.map((dataItem) => (
          <div>
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMutiSelection(dataItem.id)
                  : () => handleSelected(dataItem.id)
              }
              className="title"
            >
              {dataItem.queastion}
              <h3>+</h3>
            </div>

            {enableMultiSelection
              ? multiple.indexOf(dataItem.id) !== -1 && (
                  <div>{dataItem.answer}</div>
                )
              : selected === dataItem.id && <div>{dataItem.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
