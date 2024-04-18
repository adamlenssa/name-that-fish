import { initialFishes } from "../../constants/data";
import "./styles/score-board.css";
//  Where the score is presented

export const answersLeft = initialFishes.map((fish) => fish.name);
export function FunctionalScoreBoard({ scores }) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {scores.incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {scores.correctCount}</div>
    </div>
  );
}
