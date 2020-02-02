import React from 'react';

import './Playermode.css';

function PlayerMode({onClick, currentMode}) {
    return (
        <div className="playersCt">
            <button className={currentMode === 1 ? "offMode" : ""} onClick={() => onClick(1)}>1 player</button>
            <button className={currentMode === 2 ? "offMode" : ""} onClick={() => onClick(2)}>2 player</button>
        </div>
    )
}

export default PlayerMode;