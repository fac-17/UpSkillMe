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

export default function Badges({ selectedBadges, data }) {
  let badges = allBadges;
  if (selectedBadges) {
    badges = selectedBadges;
  }
  const [skillPoints, setSkillPoints] = React.useState({
    Communication: 10,
    Creativity: 50,
    Innovation: 20
  });
  React.useEffect(() => {
    // make API call and use setSkill points
    console.log("data", data);
  }, [data]);
  return (
    <ul className="badges">
      {badges.map(item => {
        return (
          <li>
            <h2>{item}</h2>
            <img src={`assets/${item}.svg`} alt={item} />
            <p>Points:{skillPoints[item]}</p>
          </li>
        );
      })}
    </ul>
  );
}
