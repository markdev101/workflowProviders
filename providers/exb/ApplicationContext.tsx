import * as React from 'react';

// Mode, Country, Language

const ApplicationContext = React.createContext({
  appState: '',
  setAppState: () => {},
});

export default ApplicationContext;
