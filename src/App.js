import './App.scss';

import Keyboard from './components/Keyboard'
import GameBoard from './components/GameBoard';

const handleInsertLetter = (letter) => {
  
}

function App() {

  return (
    <>
      <h1>Wordle</h1>
      <GameBoard />
      <Keyboard />
    </>

  );
}

export default App;