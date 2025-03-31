import React from 'react';

const EntryInfo = () => {
  const lastEntryTime = 'Hoy 08:30';
  const nextDayOff = 'Viernes 15';

  return (
    <div className="entry-info" style={{ marginTop: '1rem' }}>
      <p><strong>Última entrada:</strong> {lastEntryTime}</p>
      <p><strong>Próximo día libre:</strong> {nextDayOff}</p>
    </div>
  );
};

export default EntryInfo;
