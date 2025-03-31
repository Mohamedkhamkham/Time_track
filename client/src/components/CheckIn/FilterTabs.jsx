import React, { useState } from 'react';
import '../../components/CheckIn/FilterTabs.css';

const FilterTabs = ({ onChange }) => {
  const [activeTab, setActiveTab] = useState('day');
  console.log('FilterTabs renderizado');

  const handleClick = (tab) => {
    setActiveTab(tab);
    onChange(tab);
  };

  const getClass = (tab) =>
    `filter-tab ${activeTab === tab ? 'active' : ''}`;

  return (
    <div className="filter-tabs" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
      <button className={getClass('day')} onClick={() => handleClick('day')}>
        Día
      </button>
      <button className={getClass('week')} onClick={() => handleClick('week')}>
        Semana
      </button>
      <button className={getClass('month')} onClick={() => handleClick('month')}>
        Mes
      </button>
    </div>
  );
};

export default FilterTabs;
