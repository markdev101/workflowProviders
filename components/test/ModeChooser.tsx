import React, { useContext } from "react";
import AppContext from "../../providers/AppContext";
import OptionsToggle from "./OptionToggle";

const ModeChooser = () => {
  // const [mode, setMode] = useState("preset");

  const appData: any = useContext(AppContext);
  console.log("ModeChooser init:  mode=" + appData.mode);

  const onToggle = (dir: string) => {
    console.log("MODE CHOOSER toggled " + dir);
    // update global app context
    appData.mode = dir === "left" ? "workflow" : "preset";
  };
  const direction = appData.mode === "workflow" ? "left" : "right";
  console.log("ModeChooser direction  = " + direction);

  return (
    <OptionsToggle
      title="Choose Mode"
      left="workflow"
      right="preset"
      select={direction}
      onToggle={onToggle}
    ></OptionsToggle>
  );
};

export default ModeChooser;
