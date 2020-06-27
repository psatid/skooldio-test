import React, { Component } from "react";
import OpenRound from "./openRound";

export default class availableRoundSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roundState: [
        {
          id: 1,
          active: true,
        },
        {
          id: 2,
          active: true,
        },
        {
          id: 3,
          active: false,
        },
        {
          id: 4,
          active: true,
        },
        {
          id: 5,
          active: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="available-round">รอบที่เปิด</div>

        {this.state.roundState.map((round) => {
          return (
            <OpenRound key={round.id} id={round.id} active={round.active} />
          );
        })}
      </div>
    );
  }
}
