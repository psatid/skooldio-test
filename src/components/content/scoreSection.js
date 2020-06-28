import React, { Component } from "react";
import badgeIcon from "../../img/badge.svg";
import editScoreIcon from "../../img/edit-score.svg";

export default class scoreSection extends Component {
  render() {
    return (
      <div className="mt-3">
        <div className="admission mt-2">
          รอบที่ {this.props.admissionRound} : Admission
        </div>

        <button className="edit-score-button">
          <div className="edit-score">แก้ไขคะแนน</div>
          <img
            src={editScoreIcon}
            className="edit-score-logo ml-2"
            alt="edit-score"
          />
        </button>

        <div className="mt-3">
          <img src={badgeIcon} className="badgeIcon mt-3" alt="" />
          <div className="float-right">
            <div className="my-score">คะแนนของคุณคือ</div>
            <div className="score">{this.props.score}</div>
          </div>
        </div>

        <div className="text-center mt-3">
          <div className="score-detail">
            <div className="header">{this.props.minScore}</div>
            คะแนนต่ำสุด {this.props.admissionYear}
          </div>

          <div className="vertical-separator" />

          <div className="score-detail">
            <div className="header">{this.props.avgScore}</div>
            คะแนนเฉลี่ย {this.props.admissionYear}
          </div>

          <div className="vertical-separator" />

          <div className="score-detail">
            <div className="header">{this.props.highScore}</div>
            คะแนนสูงสุด {this.props.admissionYear}
          </div>
        </div>

        <div className="separator" />

        <div className="triangle">
          <i className="fas fa-caret-right"></i>
        </div>

        <h1 className="score-stat">ดูสัดส่วนคะแนน</h1>

        <div className="separator" />
      </div>
    );
  }
}
