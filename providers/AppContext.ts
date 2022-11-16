import * as React from 'react';

const AppContext = React.createContext({
  appState: '',
  setAppState: () => {},
});

export default AppContext;
