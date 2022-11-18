import * as React from 'react';

// LocationType, Location, Boundary, Buffers, SelectedReport, ReportFilter

const SettingsContext = React.createContext({
  appState: '',
  setAppState: () => {},
});

export default SettingsContext;
