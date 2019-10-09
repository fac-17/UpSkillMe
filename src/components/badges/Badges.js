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
    const targetBadge = "recilXHxEAlJqZFeu";
    if (data) {
      console.log("about to print the activities");

      allBadges.forEach(skill => {
        data.forEach(actitest => {
          console.log("current badge: ", skill);
          if (actitest.fields.skills.includes(targetBadge)) {
            console.log(actitest.fields.nameOfActivity);
          }
        });
      });
    }
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
