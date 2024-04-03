import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [score, setScore] = useState({ correctCount: 0, incorrectCount: 0 });
  return (
    <>
      {score.correctCount + score.incorrectCount === 4 && (
        <FunctionalFinalScore scores={score} />
      )}
      {score.correctCount + score.incorrectCount !== 4 && (
        <>
          <FunctionalScoreBoard scores={score} />
          <FunctionalGameBoard scores={score} handleUserScore={setScore} />
        </>
      )}
    </>
  );
}
