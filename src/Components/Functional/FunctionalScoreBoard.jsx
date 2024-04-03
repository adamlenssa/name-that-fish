import "./styles/score-board.css";
import { useState } from "react";
import { initialFishes } from "./FunctionalGameBoard";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "tuna", "shark"];
export function FunctionalScoreBoard({ scores }) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {scores.incorrectCount}</div>
      <div id="choices-left">
        {initialFishes.map((answer) => (
          <div key={answer.name} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {scores.correctCount}</div>
    </div>
  );
}
