import React from 'react';

function Rules() {
    return (
        <div className="movCard">
            <div className="ext">
                <h2>Rules of Mov.is</h2>
                <p>The rules of this games are pretty simple :<br />
                At the start of each game, a movie name is presented to you but every letter is hidden from you.<br />
                Using the keyboard underneath the name, you can guess, letter by letter, if the letter you just clicked is part of the movie's name. 
                <b> The goal of the game is to guess the movie's name.</b></p>
                
                <h3>3 game modes:</h3>
                <p><b>Easy:</b><br />
                You get unlimited lives, and a little clue to help you with the movie's name under the letters you have to guess.<br /><br />
                <b>Normal:</b><br />
                You get 8 lives (you can see them between the player mode and the game mode switches), 
                and a little clue to help you.<br /><br />
                <b>Hard:</b><br />
                You get 4 lives, and no clues !</p>

                <h3>1 or 2 players:</h3>
                <p><b>1 player:</b><br />
                You get have to guess the title, but if you don't, you can still consolate yourself with a score, that's more than nothing right ?<br /><br />
                <b>2 players:</b><br />
                You play one turn after another. Player 1 always starts. The turns shift if one player guesses a letter wrong.<br />
                If the name's guessed, the guesser wins, no matter the score. If the name isn't guessed, the player with the highest score wins.<br />
                <i>The lives number is a bit more in 2 players mode than in 1 player mode</i>
                </p>

                <h3>Have fun !</h3>
            </div>
        </div>
    )
}

export default Rules;