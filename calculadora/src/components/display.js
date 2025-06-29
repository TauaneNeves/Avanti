import React from 'react';
import './display.css'; 

const Display = ({ mainValue, historyValue }) => {
  return (
    <div className="display-container">
      <div className="history-display">{historyValue}</div>
      <div className="main-display">{mainValue}</div>
    </div>
  );
};

export default Display;