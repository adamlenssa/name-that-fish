import { Component } from "react";
import { initialFishes } from "../../constants/data";
import "./styles/score-board.css";

export const answersLeft = initialFishes.map((fish) => fish.name);
export class ClassScoreBoard extends Component {
  render() {
    const { scores } = this.props;
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
}
