import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    const { scores } = this.props;
    const totalCount = scores.correctCount + scores.incorrectCount;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{scores.correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
