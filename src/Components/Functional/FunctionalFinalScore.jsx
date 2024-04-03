import "./styles/final-score.css";
const correctCount = 0;
const totalCount = 0;
export const FunctionalFinalScore = ({ scores }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{scores.correctCount}</p>
      <hr />
      <p>{scores.correctCount + scores.incorrectCount}</p>
    </div>
  </div>
);
