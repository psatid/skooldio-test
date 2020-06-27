import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import AvailableRoundSection from "./content/availableRoundSection";
import AdmissionSection from "./content/admissionSection";
import ScoreSection from "./content/scoreSection";

export default class content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: "23,453",
      minScore: "20,000",
      avgScore: "21,124",
      highScore: "24,123",
    };
  }
  render() {
    return (
      <Row>
        <AvailableRoundSection />
        <AdmissionSection />
        <ScoreSection
          score={this.state.score}
          minScore={this.state.minScore}
          avgScore={this.state.avgScore}
          highScore={this.state.highScore}
        />
      </Row>
    );
  }
}
