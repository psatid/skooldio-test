import React, { Component } from "react";
import badgeIcon from "../../img/badge.svg";

export default class scoreSection extends Component {
  render() {
    return (
      <div className="container mt-3">
        <img src={badgeIcon} className="badgeIcon" />
        <div className="float-right">
          <div className="my-score">คะแนนของคุณคือ</div>
          <div className="score">{this.props.score}</div>
        </div>

        <div className="text-center mt-3">
          <div className="score-detail">
            <div className="header">{this.props.minScore}</div>
            คะแนนต่ำสุด 60
          </div>

          <div className="vertical-separator" />

          <div className="score-detail">
            <div className="header">{this.props.avgScore}</div>
            คะแนนเฉลี่ย 60
          </div>

          <div className="vertical-separator" />

          <div className="score-detail">
            <div className="header">{this.props.highScore}</div>
            คะแนนสูงสุด 60
          </div>
        </div>

        <div className="separator" />

        <div className="triangle">
          <i className="fas fa-caret-right"></i>
        </div>

        <h1 className="score-stat">ดูสัดส่วนคะแนน</h1>

        <hr className="separator" />
      </div>
    );
  }
}
