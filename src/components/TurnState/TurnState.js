import React from 'react';

import './TurnState.css';

function TurnState({playersMode, currentPlayer, won, lives, score, score2}) {
    return (
      <div className={(lives === 0 ? "turnRed" : "") + " turnStateCt"}>
          {playersMode === 1 ? (
            <div className="turnCt">
                <div className="turnInTop">
                    {won && <p className="turnIndicator">Congrats ! You won !</p>}
                    {lives === 0 && <p className="turnIndicator">Sorry, you're out of lives ! </p>}
                </div>
                <div className="turnIn">
                    <div className="scoreLb">Score : {score}</div>
                </div>
            </div>
          ) : (
            <div className={(won ? "turnCtWon" : "") +" turnCt"}>
                <div className="turnInTop">
                    {won && <p className="turnIndicator">Congrats ! Player {currentPlayer} won !</p>}
                    {lives === 0 && (score>score2 ? (
                        <div>
                            <p className="turnIndicator">Sorry, you're out of lives ! </p>
                            <p className="turnIndicator">By score, Player 1 Won ! </p>
                        </div>) : ( (score<score2) ? (
                        <div>
                            <p className="turnIndicator">Sorry, you're out of lives ! </p>
                            <p className="turnIndicator">By score, Player 2 Won !</p>
                        </div>):(
                            <div>
                            <p className="turnIndicator">Sorry, you're out of lives ! </p>
                            <p className="turnIndicator">It's a draw !</p>
                        </div>)
                        )
                    )}
                    {(won === false && lives > 0) && (
                        <div className="turnIndicator">
                            <p>TURN : Player {currentPlayer}</p>
                        </div>
                    )}
                </div>

                <div className={(currentPlayer === 2 ? "turnOff" : "") + " turnIn turnInDouble"}>
                    <div className="scoreLb"><span>Player 1</span><br />Score: {score}</div>
                </div>

                <div className={(currentPlayer === 1 ? "turnOff" : "") + " turnIn turnInDouble"}>
                    <div className="scoreLb"><span>Player 2</span><br />Score: {score2}</div>
                </div>
            </div>
          )}
      </div>
    )
  }

export default TurnState;