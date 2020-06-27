import React, { Component } from "react";
import favIcon from "../img/fav-icon.svg";
import { Row, Col } from "react-bootstrap";

export default class header extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col style={{ marginRight: "-2.5rem" }}>
            <img src={this.props.facultyIcon} className="engi" />
          </Col>
          <Col>
            <h1 className="faculty">{this.props.faculty}</h1>
            <h1 className="major">{this.props.major}</h1>
            <h1 className="university">{this.props.university}</h1>
          </Col>
          <Col>
            <img src={favIcon} className="fav-icon" />
          </Col>
        </Row>
        <div className="separator" />
      </div>
    );
  }
}
