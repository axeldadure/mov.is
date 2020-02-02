import React, {Component} from 'react';

import './TurnState.css';

function TurnState({players, currentPlayer, won, tries, score, score2}) {
    return (
      <div className="turnStateCt">
          {players === 1 ? (
            <div className="turnCt">
                <div className="turnInTop">
                    {won && <p>Congrats ! You won !</p>}
                    {tries === 0 && <p>Sorry, you're out of tries ! </p>}
                </div>
                <div className="turnIn">
                    <p>Score : {score}</p>
                    <p>Tries left: <b>{tries}</b></p>
                </div>
            </div>
          ) : (
            <div className="turnCt">
                <div className="turnInTop">
                    {won && <p>Congrats ! Player {currentPlayer} won !</p>}
                    {tries === 0 && (score>score2 ? (
                        <div>
                            <p>Sorry Player {currentPlayer}, you're out of tries ! </p>
                            <p>By score, Player 1 Won ! </p>
                        </div>) : ( (score<score2) ? (
                        <div>
                            <p>Sorry Player {currentPlayer}, you're out of tries ! </p>
                            <p>By score, Player 2 Won !</p>
                        </div>):(
                            <div>
                            <p>Sorry Player {currentPlayer}, you're out of tries ! </p>
                            <p>It's a draw !</p>
                        </div>)
                        )
                    )}
                    {(won === false && tries > 0) && (
                        <div>
                            <p>Tries left : <b>{tries}</b></p>
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