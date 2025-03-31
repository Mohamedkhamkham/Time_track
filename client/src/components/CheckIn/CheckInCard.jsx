import './../CheckIn/CheckInCard.css'; 
import React from 'react';

const CheckInCard = ({ type, time, note }) => {
  return (
    <div className={`checkin-card ${type}`}>
      <div className="type">
        <span>{type === 'entry' ? '⬇️' : '⬆️'}</span>
        {type === 'entry' ? 'Entrada' : 'Salida'}
      </div>
      <div className="time">{time}</div>
      {note && <div className="note">{note}</div>}
    </div>
  );
};

export default CheckInCard;
