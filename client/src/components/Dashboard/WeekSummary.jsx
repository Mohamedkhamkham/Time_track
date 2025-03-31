import React from 'react';

const WeekSummary = () => {
  const workedHours = 32;
  const totalHours = 40;
  const percentage = (workedHours / totalHours) * 100;

  return (
    <div className="week-summary">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span role="img" aria-label="clock">🕒</span>
        <strong>{workedHours} de {totalHours} horas</strong>
      </div>
      <div style={{ background: '#e0e0e0', borderRadius: '10px', marginTop: '8px' }}>
        <div
          style={{
            width: `${percentage}%`,
            background: '#005EB8',
            height: '10px',
            borderRadius: '10px'
          }}
        />
      </div>
    </div>
  );
};

export default WeekSummary;
