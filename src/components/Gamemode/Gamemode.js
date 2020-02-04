import React from 'react';

import './Gamemode.css';

function GameMode({onClick, playersMode, gameMode}) {
    return (
        <div className={(gameMode === 1 ? "movGameMode1" : (gameMode === 2 ? "movGameMode2" : "movGameMode3")) + " movGameMode"}>
            <div className={gameMode === 1 ? "onMode" : ""} onClick={() => onClick(playersMode, 1)}>Easy</div>
            <div className={gameMode === 2 ? "onMode" : ""} onClick={() => onClick(playersMode, 2)}>Normal</div>
            <div className={gameMode === 3 ? "onMode" : ""} onClick={() => onClick(playersMode, 3)}>Hard</div>
        </div>
    )
}

export default GameMode;