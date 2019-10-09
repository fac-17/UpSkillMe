import React from "react";
const allBadges = [
  "Communication",
  "Creativity",
  "Innovation",
  "Leadership",
  "Media",
  "Problem-solving",
  "Teamwork",
  "Technology"
];
export default function Badges({ selectedBadges }) {
  let badges = allBadges
  if (selectedBadges) {
    badges = selectedBadges;
  }
  return (
    <ul className="badges">
      {badges.map(item => {
        return (
          <li>
            <h2>{item}</h2>
            <img src={`assets/${item}.svg`} alt={item} />
            <h3>test</h3>
          </li>
        );
      })}
    </ul>
  );
}
