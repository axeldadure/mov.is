import React, {Component} from 'react';

import './TurnState.css';

function TurnState({playersMode, currentPlayer, won, lives, score, score2}) {
    return (
      <div className="turnStateCt">
          {playersMode === 1 ? (
            <div className="turnCt">
                <div className="turnInTop">
                    {won && <p>Congrats ! You won !</p>}
                    {lives === 0 && <p>Sorry, you're out of lives ! </p>}
                </div>
                <div className="turnIn">
                    <p>Score : {score}</p>
                </div>
            </div>
          ) : (
            <div className="turnCt">
                <div className="turnInTop">
                    {won && <p>Congrats ! Player {currentPlayer} won !</p>}
                    {lives === 0 && (score>score2 ? (
                        <div>
                            <p>Sorry Player {currentPlayer}, you're out of lives ! </p>
                            <p>By score, Player 1 Won ! </p>
                        </div>) : ( (score<score2) ? (
                        <div>
                            <p>Sorry Player {currentPlayer}, you're out of lives ! </p>
                            <p>By score, Player 2 Won !</p>
                        </div>):(
                            <div>
                            <p>Sorry Player {currentPlayer}, you're out of lives ! </p>
                            <p>It's a draw !</p>
                        </div>)
                        )
                    )}
                    {(won === false && lives > 0) && (
                        <div>
                            <p>It's Player {currentPlayer} turn</p>
                        </div>
                    )}
                </div>

                <div className="turnIn turnInDouble">
                    <p>Player 1 Score: {score}</p>
                </div>

                <div className="turnIn turnInDouble">
                    <p>Player 2 Score: {score2}</p>
                </div>
            </div>
          )}
      </div>
    )
  }

export default TurnState;