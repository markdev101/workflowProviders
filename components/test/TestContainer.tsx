import * as React from 'react';
import { AppProvider } from '../../providers/AppContext';
// import TestToggle from "./components/test/TestToggle";
import TestRadios from './TestRadios';
import ModeChooser from './ModeChooser';

const TestContainer = () => {
  const appData = {
    mode: 'preset',
    location: undefined,
    geometry: undefined,
    bufferType: 'rings',
    bufferSizes: [1, 3, 5],
    reportId: undefined,
    username: 'manders',
    token: '12310298498374988723984792837498172',
    theme: 'light',
  };

  const workflowDiv = {
    position: 'absolute',
    top: '100px',
    left: '6px',
    width: '270px',
    height: '80%',
    overflow: 'auto',
    border: 'solid 1px gray',
  };
  const radioItems = ['workflow', 'preset']

  return (
    <div>
      <AppProvider value={appData}>
        <div> {'Mode = ' + appData.mode}</div>
        <div style={workflowDiv}>
          <ModeChooser className="modeToggle"></ModeChooser>
          <TestRadios className="radios" title="Select Mode:" items={radioItems} selected="preset" ></TestRadios>
        </div>
      </AppProvider>
    </div>
  );
};

export default TestContainer;

// .toggles {
//   width: 200px;
// }
