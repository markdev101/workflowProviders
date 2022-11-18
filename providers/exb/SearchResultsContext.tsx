import * as React from 'react';

// LocationType, Location, Boundary, MapWidget

const SearchResultsContext = React.createContext({
  appState: '',
  setAppState: () => {},
});

export default SearchResultsContext;
