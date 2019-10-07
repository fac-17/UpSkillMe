import React from "react";
const allBadges = [
  "Communication",
  //   ,
  //   "Creativity",
  //   "Innovation",
  //   "Leadership",
  "Media"
  //   "Problem Solving",
  //   "Teamwork",
  //   "Technology"
];
export default function Badges({ selectAllBadges, selectedBadges }) {
  let badges;
  if (selectAllBadges === true) {
    badges = allBadges;
  } else {
    badges = selectedBadges;
  }
  return (
    <ul className="badges">
      {badges.map(item => {
        return (
          <li>
            <h2>{item}</h2>
            <img src={`assets/${item}.svg`} alt={item} />
          </li>
        );
      })}
    </ul>
  );
}
