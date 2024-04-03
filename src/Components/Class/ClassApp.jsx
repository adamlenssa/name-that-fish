import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  handleUserScore = (data) =>
    this.setState({
      data,
    });
  render() {
    return (
      <>
        <>
          <ClassScoreBoard scores={this.state} />
          <ClassGameBoard
            scores={this.state}
            handleUserScore={this.handleUserScore}
          />
        </>
        {false && <ClassFinalScore scores={this.state} />}
      </>
    );
  }
}
