export default function GameBoard({ guessWord }) {
  return (
    <div id="game-board">
      <div className="letter-row" id="row-0">
        <div className="letter-box-0">{guessWord[0]}</div>
        <div className="letter-box-1">{guessWord[1]}</div>
        <div className="letter-box-2">{guessWord[2]}</div>
        <div className="letter-box-3">{guessWord[3]}</div>
        <div className="letter-box-4">{guessWord[4]}</div>
      </div>
      <div className="letter-row" id="row-1">
        <div className="letter-box-0">{guessWord[0]}</div>
        <div className="letter-box-1">{guessWord[1]}</div>
        <div className="letter-box-2">{guessWord[2]}</div>
        <div className="letter-box-3">{guessWord[3]}</div>
        <div className="letter-box-4">{guessWord[4]}</div>
      </div>
      <div className="letter-row" id="row-2">
        <div className="letter-box-0">{guessWord[0]}</div>
        <div className="letter-box-1">{guessWord[1]}</div>
        <div className="letter-box-2">{guessWord[2]}</div>
        <div className="letter-box-3">{guessWord[3]}</div>
        <div className="letter-box-4">{guessWord[4]}</div>
      </div>
      <div className="letter-row" id="row-3">
        <div className="letter-box-0">{guessWord[0]}</div>
        <div className="letter-box-1">{guessWord[1]}</div>
        <div className="letter-box-2">{guessWord[2]}</div>
        <div className="letter-box-3">{guessWord[3]}</div>
        <div className="letter-box-4">{guessWord[4]}</div>
      </div>
      <div className="letter-row" row="row-4">
        <div className="letter-box-0">{guessWord[0]}</div>
        <div className="letter-box-1">{guessWord[1]}</div>
        <div className="letter-box-2">{guessWord[2]}</div>
        <div className="letter-box-3">{guessWord[3]}</div>
        <div className="letter-box-4">{guessWord[4]}</div>
      </div>
      <div className="letter-row" row="row-5">
        <div className="letter-box-0">{guessWord[0]}</div>
        <div className="letter-box-1">{guessWord[1]}</div>
        <div className="letter-box-2">{guessWord[2]}</div>
        <div className="letter-box-3">{guessWord[3]}</div>
        <div className="letter-box-4">{guessWord[4]}</div>
      </div>
    </div>
  );
}
