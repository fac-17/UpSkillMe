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
  // This updates the badge score. It runs every time the data changes
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

  if (!data) {
    return (<p>Loading...</p>)
  }

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
