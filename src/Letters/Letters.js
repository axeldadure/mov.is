import React from 'react';

import './Letters.css';

function Letters({letter, onClick, used}) {
    return (
      <div className={(used ? "used" : "") + " letter"} onClick={() => onClick(letter)}>{letter}</div>
    )
  }

export default Letters;