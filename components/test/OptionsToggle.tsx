import React, { useState } from "react";
import "./css/optionsToggle.css";
import TestToggle from "./TestToggle";

const OptionsToggle = (props: any) => {
  const { title, left, right, select } = props;

  console.log(
    "OptionsToggle init: select=" + select + " props.select=" + props.select
  );

  // const [mode, setMode] = useState("workflow");
  const onToggleChange = (dir: string) => {
    if (props.onToggle) {
      props.onToggle(dir);
    }
  };

  return (
    <div className="modesOuter">
      <div className="modesLabel">{title}</div>
      <div className="modesLeft">{left}</div>
      <div className="modesTog">
        <TestToggle
          thumb="white"
          direction={select}
          onToggle={onToggleChange}
        ></TestToggle>
      </div>
      <div className="modesRight">{right}</div>
    </div>
  );
};

export default OptionsToggle;
