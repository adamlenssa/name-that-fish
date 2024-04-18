import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../constants/data";

export function FunctionalApp() {
  const [score, setScore] = useState({ correctCount: 0, incorrectCount: 0 });
  const fishIndex = score.correctCount + score.incorrectCount;
  const isGameOver = fishIndex === initialFishes.length;
  return (
    <>
      {isGameOver && (
        <FunctionalFinalScore
          correctCount={score.correctCount}
          totalCount={score.correctCount + score.incorrectCount}
        />
      )}
      {!isGameOver && (
        <>
          <FunctionalScoreBoard scores={score} />
          <FunctionalGameBoard scores={score} handleUserScore={setScore} />
        </>
      )}
    </>
  );
}
