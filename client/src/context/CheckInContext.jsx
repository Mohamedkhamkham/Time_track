import React, { createContext, useContext, useState } from 'react';

const CheckInContext = createContext();

export const CheckInProvider = ({ children }) => {
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem('checkins');
    return stored ? JSON.parse(stored) : [];
  });

  const hasOpenEntry = entries.length > 0 && entries[entries.length - 1].type === 'entry';

  const registerEntry = () => {
    const now = new Date().toISOString();
    const updated = [...entries, { type: 'entry', time: now }];
    setEntries(updated);
    localStorage.setItem('checkins', JSON.stringify(updated));
  };

  const registerExit = () => {
    const now = new Date().toISOString();
    const updated = [...entries, { type: 'exit', time: now }];
    setEntries(updated);
    localStorage.setItem('checkins', JSON.stringify(updated));
  };

  return (
    <CheckInContext.Provider value={{ entries, setEntries, registerEntry, registerExit, hasOpenEntry }}>
      {children}
    </CheckInContext.Provider>
  );
};

export const useCheckIn = () => useContext(CheckInContext);
