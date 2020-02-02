import React, {Component} from 'react';

import './App.css';

const ALPHA_B = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const ALPHA_ARR = Array.from(ALPHA_B)
const PHRASES = [
  "LE MASQUE ASSOCIE", 
  "SANS SIGNES DIACRITIQUES",
  "RECOMMENCER UNE PARTIE", 
  "LES LETTRES CORRESPONDATES",
  "TOURATOUR",
  "MA BITE",
  "TOTO"
]


function Letters({letter, onClick, used}) {
  return (
    <div className={(used ? "used" : "") + " letter"} onClick={() => onClick(letter)}>{letter}</div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState(1)
  }

  initialState(nbPlayer) {
    return {
      players: nbPlayer,
      letters: ALPHA_ARR,
      phrase: PHRASES[Math.floor((Math.random() * (PHRASES.length)))],
      usedLetters: [" "],
      won: false,
      tries: 5,
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
    this.setState(prevState => {
      const usedLetters = prevState.usedLetters.concat(letter)
      const won = prevState.phrase.split("").every(letter => usedLetters.includes(letter))
      const tries = prevState.phrase.split("").includes(letter) ? prevState.tries : prevState.tries -1
      const score = prevState.phrase.split("").includes(letter) ? prevState.score + 2 : prevState.score - 1
      return {
        usedLetters,
        won,
        tries,
        score
      }
    })
  }

  computeDisplay = (phrase, usedLetters) => {  
    return phrase.replace(/\w/g, (letter) => (usedLetters.includes(letter) ? letter : '_'))
  }

  render() {
    const {players, letters, phrase, usedLetters, won, tries, score} = this.state
    const phraseHidden = this.computeDisplay(phrase, usedLetters)

    return (
      <div className="ct">
      <div className="playersCt">
        <button onClick={() => this.restart(1)}>1 player</button>
        <button onClick={() => this.restart(2)}>2 player</button>
      </div>
      <div className="topCt">
        Tries : {tries} - Score: {score} - Players: {players}
      </div>
        <div className="phraseCt">
          {phraseHidden}
        </div>
        <div className="lettersCt">
          {(won || tries ===0) ? (
            <button onClick={() => this.restart(players)}>restart</button>
          ) : (letters.map((letter,i) => (
            <Letters used={usedLetters.includes(letter) ? true : false} letter={letter} key={i} onClick={this.handleLetterClick}/>
          )))}
          
          
        </div>
      </div>
    )
  }
}

export default App;
