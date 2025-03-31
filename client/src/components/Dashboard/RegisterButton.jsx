import React from 'react';

const RegisterButton = () => {
  return (
    <button style={{
      background: '#005EB8',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '999px',
      border: 'none',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '2rem',
      cursor: 'pointer'
    }}>
      ▶ Registrar Entrada
    </button>
  );
};

export default RegisterButton;
