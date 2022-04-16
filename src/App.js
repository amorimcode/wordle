import "./App.scss";
import { useEffect, useState } from "react";

import axios from "axios";

import Keyboard from "./components/Keyboard";
import GameBoard from "./components/GameBoard";

function lettersOnly(event) {
  var charCode = event.keyCode;

  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    charCode == 8
  )
    return true;
  else return false;
}

async function handleCheckWord(guessWord, currentGuess) {
  const res = await axios.post("http://localhost:3001/checkWord", {
    guessWord: guessWord,
  });
  
  console.log(res)


  for (let [idx, color] of res.data.entries()) {
    var div = document.querySelector(`#row-${currentGuess} .letter-box-${idx}`);
    div.style.backgroundColor = color
  }

}

function App() {
  const [guessWord, setGuessWord] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(1);
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      if (guessWord.length >= 1) {
        const updateGuessWordArray = guessWord.slice(0, -1);

        setGuessWord(updateGuessWordArray);
      }
    } else if (event.key === "Enter") {
      handleCheckWord(guessWord, currentGuess);

    } else if (lettersOnly(event) && event.key.length === 1) {
      if (guessWord.length < 5) {
        const updateGuessWordArray = [...guessWord, event.key];

        setGuessWord(updateGuessWordArray);
      }
    }
  });

  return (
    <>
      <h1>Wordle</h1>
      <GameBoard guessWord={guessWord} />
      <Keyboard />
    </>
  );
}

export default App;
