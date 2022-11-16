import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../providers/AppContext';
import OptionsToggle from './OptionsToggle';

const ModeChooser = () => {
  const { appState, setAppState } = useContext(AppContext);
  const appObj = JSON.parse(appState);

  const updateMode = (mode) => {
    if (appObj) {
      const newState = {
        ...appObj,
        mode: mode,
      };
      setAppState(JSON.stringify(newState));
    } else {
      console.log('ModeChooser invalid appState');
    }
  };
  const onToggle = (dir: string) => {
    // update global app context
    let m = dir === 'right' ? 'preset' : 'workflow';
    appObj.mode = m;
    updateMode(m);
  };

  const direction = appObj.mode === 'workflow' ? 'left' : 'right';

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
