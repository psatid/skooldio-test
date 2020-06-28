import React, { Component } from "react";
import favIcon from "../img/fav-icon.svg";

export default class header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col" style={{ marginRight: "-2.5rem" }}>
            <img
              src={this.props.facultyIcon}
              className="engi"
              alt="faculty-icon"
            />
          </div>
          <div className="col">
            <h1 className="faculty">{this.props.faculty}</h1>
            <h1 className="major">{this.props.major}</h1>
            <h1 className="university">{this.props.university}</h1>
          </div>
          <div className="col">
            <img src={favIcon} className="fav-icon" alt="favourite" />
          </div>
        </div>
        <div className="separator" />
      </div>
    );
  }
}
