export default function GameBoard({
  guessWord0,
  guessWord1,
  guessWord2,
  guessWord3,
  guessWord4,
  guessWord5,
}) {
  return (
    <div id="game-board">
      <div className="letter-row" id="row-0">
        <div className="letter-box-0">{guessWord0[0]}</div>
        <div className="letter-box-1">{guessWord0[1]}</div>
        <div className="letter-box-2">{guessWord0[2]}</div>
        <div className="letter-box-3">{guessWord0[3]}</div>
        <div className="letter-box-4">{guessWord0[4]}</div>
      </div>
      <div className="letter-row" id="row-1">
        <div className="letter-box-0">{guessWord1[0]}</div>
        <div className="letter-box-1">{guessWord1[1]}</div>
        <div className="letter-box-2">{guessWord1[2]}</div>
        <div className="letter-box-3">{guessWord1[3]}</div>
        <div className="letter-box-4">{guessWord1[4]}</div>
      </div>
      <div className="letter-row" id="row-2">
        <div className="letter-box-0">{guessWord2[0]}</div>
        <div className="letter-box-1">{guessWord2[1]}</div>
        <div className="letter-box-2">{guessWord2[2]}</div>
        <div className="letter-box-3">{guessWord2[3]}</div>
        <div className="letter-box-4">{guessWord2[4]}</div>
      </div>
      <div className="letter-row" id="row-3">
        <div className="letter-box-0">{guessWord3[0]}</div>
        <div className="letter-box-1">{guessWord3[1]}</div>
        <div className="letter-box-2">{guessWord3[2]}</div>
        <div className="letter-box-3">{guessWord3[3]}</div>
        <div className="letter-box-4">{guessWord3[4]}</div>
      </div>
      <div className="letter-row" row="row-4">
        <div className="letter-box-0">{guessWord4[0]}</div>
        <div className="letter-box-1">{guessWord4[1]}</div>
        <div className="letter-box-2">{guessWord4[2]}</div>
        <div className="letter-box-3">{guessWord4[3]}</div>
        <div className="letter-box-4">{guessWord4[4]}</div>
      </div>
      <div className="letter-row" row="row-5">
        <div className="letter-box-0">{guessWord5[0]}</div>
        <div className="letter-box-1">{guessWord5[1]}</div>
        <div className="letter-box-2">{guessWord5[2]}</div>
        <div className="letter-box-3">{guessWord5[3]}</div>
        <div className="letter-box-4">{guessWord5[4]}</div>
      </div>
    </div>
  );
}
