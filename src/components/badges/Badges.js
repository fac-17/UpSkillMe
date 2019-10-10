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
  const [skillPoints, setSkillPoints] = React.useState(
    {
      "Communication": 0,
      "Creativity": 0,
      "Innovation": 0,
      "Leadership": 0,
      "Media": 0,
      "Problem-solving": 0,
      "Teamwork": 0,
      "Technology": 0
    }
    , []);
  React.useEffect(() => {
    // make API call and use setSkill points
    if (data) {
      // copy of the skill points object
      const temporarySkillPoints = {
        "Communication": 0,
        "Creativity": 0,
        "Innovation": 0,
        "Leadership": 0,
        "Media": 0,
        "Problem-solving": 0,
        "Teamwork": 0,
        "Technology": 0
      }
      // loop through each skill
      allBadges.forEach(skill => {
        // loop through each activity for this user
        data.forEach(activity => {
          // if the curr actvitity involves current skill
          if (activity.fields.skills.includes(skill)) {
            // increase the number of points by the amount per skill in that activity
            temporarySkillPoints[skill] = temporarySkillPoints[skill] += activity.fields.pointsPerSkill;
          }
        });
      });
      // After running through all skills/acticities, update the state of skill points with the copy 
      setSkillPoints(temporarySkillPoints)
    }
  }, [data]);

  return (
    <ul className="badges">
      {badges.map(item => {
        return (
          <li>
            <h5>{item}</h5>
            <img src={`assets/${item}.svg`} alt={item} />
            {!selectedBadges ? <p>Points:{skillPoints[item]}</p> : ''}
          </li>
        );
      })}
    </ul>
  );
}
