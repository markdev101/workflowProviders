import React from 'react';
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

  return (
    <div>
      <AppProvider value={appData}>
        <div> {'Mode = ' + appData.mode}</div>
        <ModeChooser className="modeToggle"></ModeChooser>
        <TestRadios className="radios"></TestRadios>
      </AppProvider>
    </div>
  );
};

export default TestContainer;

// .toggles {
//   width: 200px;
// }
