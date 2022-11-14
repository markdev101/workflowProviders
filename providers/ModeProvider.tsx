import { useState } from 'react';

function ModeProvider({children}) {
  const [mode, setMode] = useState('preset');

  const change = useCallback((currentMode) => setMode(
    (old) => [
      ...old.slice(0, offset,
      {
        ...old[offset],
        currentMode,
      },
      ...old.slice(offset + 1),
    ]
  ), []);

  const value = {
    state: { mode },
    actions: { change },
  };

  return (
    <ModeContext.Provider value={value}>
      {children}
    </ModeContext.Provider>
  )
}
