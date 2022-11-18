import * as React from 'react';

// Steps, Buffers, LocationType, Location, Boundary, Selected Report, Report Filter

const WorkflowContext = React.createContext({
  appState: '',
  setAppState: () => {},
});

export default WorkflowContext;
