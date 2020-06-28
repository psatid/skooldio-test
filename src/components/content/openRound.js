import React from "react";

export default function openRound({ id, active }) {
  if (active) {
    return (
      <div className="oval-active">
        <h1 className="round">{id}</h1>
      </div>
    );
  } else {
    return (
      <div className="oval-inactive">
        <h1 className="round">{id}</h1>
      </div>
    );
  }
}
