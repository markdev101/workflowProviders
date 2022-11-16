import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../providers/AppContext';
import OptionsToggle from './OptionsToggle';

const ModeChooser = () => {
  // const [mode, setMode] = useState("preset");

  const { appState, setAppState } = useContext(AppContext);
  const appObj = JSON.parse(appState);

  console.log('ModeChooser init:  app state=', appObj);

  const updateMode = (mode) => {
    if (appObj) {
      const newState = {
        ...appObj,
        mode: mode,
      };
      console.log('ModeChooser setting appState =', newState);
      setAppState(JSON.stringify(newState));
    } else {
      console.log('ModeChooser invalid appState');
    }
  };
  const onToggle = (dir: string) => {
    console.log('MODE CHOOSER toggled ' + dir);
    // update global app context
    updateMode(dir);
  };
  const direction = appObj.mode === 'workflow' ? 'left' : 'right';
  console.log('ModeChooser direction  = ' + direction);

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
