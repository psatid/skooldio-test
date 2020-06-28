import React, { Component } from "react";
import AvailableRoundSection from "./content/availableRoundSection";
import ScoreSection from "./content/scoreSection";

export default class content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: "23,453",
      minScore: "20,000",
      avgScore: "21,134",
      highScore: "24,123",
      admissionRound: "4",
      admissionYear: "60",
    };
  }
  render() {
    return (
      <div className="container">
        <AvailableRoundSection />
        <ScoreSection
          score={this.state.score}
          minScore={this.state.minScore}
          avgScore={this.state.avgScore}
          highScore={this.state.highScore}
          admissionRound={this.state.admissionRound}
          admissionYear={this.state.admissionYear}
        />
      </div>
    );
  }
}
