import React from "react";
import("./ActivityButton.css");

export default function ActivityButton() {
  return (
    <button className="add-activity-button">
      Add Activity <br></br>
      <span className="plus-sign">+</span>
    </button>
  );
}
