import React, { Component } from "react";
import editScoreIcon from "../../img/edit-score.svg";

export default class admissionSection extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="admission mt-2">รอบที่ 4 : Admission</div>

        <button className="edit-score-button">
          <div className="edit-score">แก้ไขคะแนน</div>
          <img src={editScoreIcon} className="edit-score-logo ml-2" />
        </button>
      </div>
    );
  }
}
