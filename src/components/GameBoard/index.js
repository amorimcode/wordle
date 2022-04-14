import { useEffect, useState } from "react";


export default function GameBoard() {
  const [guessWord, setGuessWord] = useState('');


  function insertLetter(letter) {
    var div = document.getElementById("row-1");
    var letters = div.getElementsByClassName("letter-box");
    for (var i = 0; letters.length; i++) {

      if (letters[i].innerHTML === '') {
        letters[i].innerHTML = letter
        setGuessWord(guessWord + letter)
        return
      }

      console.log(guessWord)
    }

  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      let pressedKey = String(e.key);
      let found = pressedKey.match(/[a-z]/gi);
      insertLetter(found);
    });

  });

  return (
    <div id="game-board">
      <div className="letter-row" id="row-1">
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
      </div>
      <div className="letter-row" id="row-2">
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
      </div>
      <div className="letter-row" id="row-3">
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
      </div>
      <div className="letter-row" id="row-4">
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
      </div>
      <div className="letter-row" row="row-5">
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
      </div>
      <div className="letter-row" row="row-6">
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
        <div className="letter-box"></div>
      </div>
    </div>
  );
}
