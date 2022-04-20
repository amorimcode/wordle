import "./App.scss";
import { useEffect, useState } from "react";

import axios from "axios";

import Keyboard from "./components/Keyboard";
import GameBoard from "./components/GameBoard";

function lettersOnly(event) {
  const charCode = event.keyCode;

  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    charCode == 8
  )
    return true;
  else return false;
}

async function handleCheckWord(guessWord, currentGuess) {
  
  const res = await axios.post("http://wordleapibr.herokuapp.com/checkWord", {
    guessWord: guessWord,
  })

  console.log(res)

  for (let [idx, color] of res.data.entries()) {
    const div = document.querySelector(
      `#row-${currentGuess} .letter-box-${idx}`
    );
    div.style.backgroundColor = color;
  }

  if(JSON.stringify(["green","green","green","green","green"]) == JSON.stringify(res.data)){
    alert("Parabéns, você acertou!")
}

}

function App() {
  const [guessWord0, setGuessWord0] = useState([]);
  const [guessWord1, setGuessWord1] = useState([]);
  const [guessWord2, setGuessWord2] = useState([]);
  const [guessWord3, setGuessWord3] = useState([]);
  const [guessWord4, setGuessWord4] = useState([]);
  const [guessWord5, setGuessWord5] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(0);

  useEffect(() => {
    document.addEventListener("keypress", (event) => {
      if (event.key === "Backspace") {
        if (guessWord0.length >= 1 && currentGuess === 0) {
          const updateGuessWordArray0 = guessWord0.slice(0, -1);

          setGuessWord0(updateGuessWordArray0);
        }
        if (guessWord1.length >= 1 && currentGuess === 1) {
          const updateGuessWordArray1 = guessWord1.slice(0, -1);

          setGuessWord1(updateGuessWordArray1);
        }
      }
      if (event.key === "Enter") {
        switch (currentGuess) {
          case 0:
            handleCheckWord(guessWord0, currentGuess);
            break;
          case 1:
            handleCheckWord(guessWord1, currentGuess);
            break;
          case 2:
            handleCheckWord(guessWord2, currentGuess);
            break;
          case 3:
            handleCheckWord(guessWord3, currentGuess);
            break;
          case 4:
            handleCheckWord(guessWord4, currentGuess);
            break;
          case 5:
            handleCheckWord(guessWord5, currentGuess);
            break;

          default:
            break;
        }

        setCurrentGuess(currentGuess + 1);
      }
      if (lettersOnly(event) && event.key.length === 1) {
        let updateGuessWordArray = [];

        switch (currentGuess) {
          case 0:
            updateGuessWordArray = [...guessWord0, event.key];
            setGuessWord0(updateGuessWordArray);
            break;
          case 1:
            updateGuessWordArray = [...guessWord1, event.key];
            setGuessWord1(updateGuessWordArray);
            break;
          case 2:
            updateGuessWordArray = [...guessWord2, event.key];
            setGuessWord2(updateGuessWordArray);
            break;
          case 3:
            updateGuessWordArray = [...guessWord3, event.key];
            setGuessWord3(updateGuessWordArray);
            break;
          case 4:
            updateGuessWordArray = [...guessWord4, event.key];
            setGuessWord4(updateGuessWordArray);
            break;
          case 5:
            updateGuessWordArray = [...guessWord5, event.key];
            setGuessWord5(updateGuessWordArray);
            break;
          default:
            break;
        }
      }
    });
  });

  function pressbutton(value) {
    console.log(value)
  }

  return (
    <>
      <h1>Wordle</h1>
      <GameBoard
        guessWord0={guessWord0}
        guessWord1={guessWord1}
        guessWord2={guessWord2}
        guessWord3={guessWord3}
        guessWord4={guessWord4}
        guessWord5={guessWord5}
      />
      <Keyboard />
    </>
  );
}

export default App;
