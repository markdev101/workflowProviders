import * as React from 'react';
import { useState } from 'react';
import AppContext from './providers/AppContext';
import TestContainer from './components/test/TestContainer';
import './style.css';

export default function App() {
  // ----------------------------------------------
  // The app context has a simple string value
  const appSettings = { mode: 'preset' };
  const appStr = JSON.stringify(appSettings);

  const [appState, setAppState] = useState(appStr);
  const appValue = { appState, setAppState };

  return (
    <AppContext.Provider value={appValue}>
      <div className="App">
        <h3>ba-infographic states</h3>
        <TestContainer className="appContainer"></TestContainer>
      </div>
    </AppContext.Provider>
  );
}
