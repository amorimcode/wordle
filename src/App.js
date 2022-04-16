import "./App.scss";
import { useEffect, useState } from "react";

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

function App() {
  const [guessWord, setGuessWord] = useState([]);
  const [word, setWord] = useState("");

  document.addEventListener("keydown", (event) => {
    
    if (event.key === 'Backspace') {
      const updateGuessWordArray = guessWord.slice(0, -1);;

      console.log(guessWord)
      setGuessWord(updateGuessWordArray);
    }

    if (lettersOnly(event) && event.key.length === 1) {
      
      if (guessWord.length < 5) {
        const updateGuessWordArray = [...guessWord, event.key];

        setGuessWord(updateGuessWordArray);
      }

      console.log(guessWord);
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
