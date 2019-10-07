import React from "react";
const exampleBadges = ["leadership", "communication"];
export default function Badges(props) {
  return (
    <ul className="badges">
      {exampleBadges.map(item => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}
