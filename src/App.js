import React, {Component} from 'react';
import PlayerMode from './components/Playermode/Playermode'
import GameMode from './components/Gamemode/Gamemode'
import Letters from './components/Letters/Letters'
import TurnState from './components/TurnState/TurnState'

import Movies from './data/Movies.json'

import './App.css';

const ALPHA_B = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const ALPHA_ARR = Array.from(ALPHA_B)
const MOVIES = Movies.movies

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = this.initialState(1, 1)
  }

  initialState(playersMode, gameMode) {
    const RANDOM_ID = Math.floor((Math.random() * (MOVIES.length)))
    let lives
    if (gameMode === 1) {
      lives = 26
    }
    else if (gameMode === 2) {
      lives = playersMode === 1 ? 8 : 11
    }
    else {
      lives = playersMode === 1 ? 4 : 7
    }
    return {
      playersMode: playersMode,
      gameMode: gameMode,
      currentPlayer: 1,
      letters: ALPHA_ARR,
      usedLetters: [" "],
      movieName: MOVIES[RANDOM_ID].name,
      movieClue: MOVIES[RANDOM_ID].clue,
      won: false,
      lives: lives,
      score: 10,
      score2: 10
    }
  }

  //restart the game
  restart = (playersMode, gameMode) => {
    this.setState(this.initialState(playersMode, gameMode))
  }

  //method called when a letter is clicked
  handleLetterClick = (letter) => {
    const split = this.state.movieName.split("")
    const usedLetters = this.state.usedLetters.concat(letter)
    const won = split.every(letter => usedLetters.includes(letter))

    if (this.state.playersMode === 1) {
      this.setState(prevState => {
        const lives = split.includes(letter) ? prevState.lives : prevState.lives - 1
        const score = split.includes(letter) ? prevState.score + 2 : prevState.score - 1

        return {
          usedLetters,
          won,
          lives,
          score
        }
      })
    } else {
      const lives = split.includes(letter) ? this.state.lives : this.state.lives - 1
      this.setState(prevState => {
        if (prevState.currentPlayer === 1) {
          const score = split.includes(letter) ? prevState.score + 2 : prevState.score - 1
          const currentPlayer = split.includes(letter) ? prevState.currentPlayer : 2
          
          return {
            usedLetters,
            won,
            lives,
            score,
            currentPlayer
          }
        } else {
          const score2 = split.includes(letter) ? prevState.score2 + 2 : prevState.score2 - 1
          const currentPlayer = split.includes(letter) ? prevState.currentPlayer : 1
          
          return {
            usedLetters,
            won,
            lives,
            score2,
            currentPlayer
          }
        }
      })
    }
  }

  computeDisplay = (movieName, usedLetters) => {  
    return movieName.replace(/\w/g, (letter) => (usedLetters.includes(letter) ? letter : '_'))
  }

  render() {
    const {playersMode, gameMode, currentPlayer, letters, usedLetters, movieName, movieClue, won, lives, score, score2} = this.state
    const movieHidden = this.computeDisplay(movieName, usedLetters)

    return (
      <div className="ct">
        <div className="movTop">
          <h1>Mov.is</h1>
          <div className="movTopNav">
            <a className="active">Game</a>
            <a>Rules</a>
            <a>About</a>
          </div>
        </div>
        <div className="movCard">
          <div className="movCardTop">
            <PlayerMode onClick={this.restart} playersMode={playersMode} gameMode={gameMode} />
            <GameMode onClick={this.restart} playersMode={playersMode} gameMode={gameMode} />
          </div>

          {gameMode > 1 && (<div className="movLives">{lives}</div>)}

          <div className={(won ? "phraseCtWon" : (lives === 0 ? "phraseCtLost" : "")) + " phraseCt"}>
            <span>{lives === 0 ? movieName : movieHidden}</span>
          </div>

          {gameMode !== 3 && (
            <div className="clueCt">
              <span>{movieClue}</span>
            </div>
          )}

          <div className="lettersCt">
            {(won || lives === 0) ? (
              <button onClick={() => this.restart(playersMode, gameMode)}>restart</button>
            ) : (letters.map((letter,i) => (
              <Letters used={usedLetters.includes(letter) ? true : false} letter={letter} key={i} onClick={this.handleLetterClick}/>
            )))}
          </div>

          <TurnState playersMode={playersMode} currentPlayer={currentPlayer} won={won} lives={lives} score={score} score2={score2}/>
        </div>
      </div>
    )
  }
}

export default App;
