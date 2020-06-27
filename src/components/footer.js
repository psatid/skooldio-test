import React, { Component } from "react";
import shareIcon from "../img/share.svg";

export default class footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="interest-logo">
          <i class="fas fa-user-alt"></i>
        </div>
        <h1 className="interest-amount">{this.props.interestedAmount}</h1>
        <h1 className="interest-text">คนที่สนใจ</h1>
        <img src={shareIcon} class="share-logo" />
      </div>
    );
  }
}
