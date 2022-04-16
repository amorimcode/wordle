


export default function GameBoard({guessWord}) {
  return (
    <div id="game-board">
      <div className="letter-row" id="row-1">
        <div className="letter-box">{guessWord[0]}</div>
        <div className="letter-box">{guessWord[1]}</div>
        <div className="letter-box">{guessWord[2]}</div>
        <div className="letter-box">{guessWord[3]}</div>
        <div className="letter-box">{guessWord[4]}</div>
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
