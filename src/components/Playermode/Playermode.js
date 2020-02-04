import React from 'react';

import './Playermode.css';

function PlayerMode({onClick, playersMode, gameMode}) {
    return (
        <div className={(playersMode === 1 ? "movPlayer1" : "movPlayer2") + " movPlayers"}>
            <div className={playersMode === 1 ? "onMode" : ""} onClick={() => onClick(1, gameMode)}>1 player</div>
            <div className={playersMode === 2 ? "onMode" : ""} onClick={() => onClick(2, gameMode)}>2 players</div>
        </div>
    )
}

export default PlayerMode;