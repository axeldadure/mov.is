import React, {Component} from 'react';
import PlayerMode from './Playermode/Playermode'
import Letters from './Letters/Letters'
import TurnState from './TurnState/TurnState'

import Movies from './data/Movies.json'

import './App.css';

const ALPHA_B = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const ALPHA_ARR = Array.from(ALPHA_B)
const MOVIES = Movies.movies

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState(1)
  }

  initialState(nbPlayer) {
    const randomId = Math.floor((Math.random() * (MOVIES.length)))
    const tries = nbPlayer === 1 ? 5 : 8
    return {
      players: nbPlayer,
      currentPlayer: 1,
      letters: ALPHA_ARR,
      movieName: MOVIES[randomId].name,
      movieClue: MOVIES[randomId].clue,
      usedLetters: [" "],
      won: false,
      tries: tries,
      score: 10,
      score2: 10
    }
  }

  //restart the game
  restart = (nbPlayer) => {
    this.setState(this.initialState(nbPlayer))
  }

  //method called when a letter is clicked
  handleLetterClick = (letter) => {
    const split = this.state.movieName.split("")
    const usedLetters = this.state.usedLetters.concat(letter)
    const won = split.every(letter => usedLetters.includes(letter))

    if (this.state.players === 1) {
      this.setState(prevState => {
        const tries = split.includes(letter) ? prevState.tries : prevState.tries - 1
        const score = split.includes(letter) ? prevState.score + 2 : prevState.score - 1

        return {
          usedLetters,
          won,
          tries,
          score
        }
      })
    } else {
      const tries = split.includes(letter) ? this.state.tries : this.state.tries - 1
      this.setState(prevState => {
        if (prevState.currentPlayer === 1) {
          const score = split.includes(letter) ? prevState.score + 2 : prevState.score - 1
          const currentPlayer = split.includes(letter) ? prevState.currentPlayer : 2
          
          return {
            usedLetters,
            won,
            tries,
            score,
            currentPlayer
          }
        } else {
          const score2 = split.includes(letter) ? prevState.score2 + 2 : prevState.score2 - 1
          const currentPlayer = split.includes(letter) ? prevState.currentPlayer : 1
          
          return {
            usedLetters,
            won,
            tries,
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
    const {players,currentPlayer, letters, movieName, movieClue, usedLetters, won, tries, score, score2} = this.state
    const movieHidden = this.computeDisplay(movieName, usedLetters)

    return (
      <div className="ct">
        <PlayerMode onClick={this.restart} currentMode={players} />
        <div className="topCt">
          Players: {players}
        </div>
          <div className={(won ? "phraseCtWon" : (tries === 0 ? "phraseCtLost" : "")) + " phraseCt"}>
            {tries === 0 ? movieName : movieHidden}
          </div>
          <div className="clueCt">
            {movieClue}
          </div>
          <div className="lettersCt">
            {(won || tries === 0) ? (
              <button onClick={() => this.restart(players)}>restart</button>
            ) : (letters.map((letter,i) => (
              <Letters used={usedLetters.includes(letter) ? true : false} letter={letter} key={i} onClick={this.handleLetterClick}/>
            )))}
          </div>
          <TurnState players={players} currentPlayer={currentPlayer} won={won} tries={tries} score={score} score2={score2}/>
      </div>
    )
  }
}

export default App;
