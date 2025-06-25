import React from 'react';
import './botao.css';

const Button = ({ value, onClick, className }) => {
  return (
    <button className={`button ${className || ''}`} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;