import React from "react";
import styled from "styled-components";

//Styled components
 const BadgesStyle = styled.ul`
 list-style: none;
 display: flex;
 flex-direction: row;
 text-align: center;
 flex-wrap: wrap;
 justify-content: center;
 padding: 0;
 `;

 const ListBadges = styled.li`
 width: 150px;
 padding: 20px;
 @media (max-width: 414px){
   width: 90px;
   padding: 10px;
 }
 @media (min-width: 940px){
   padding-left: 100px;
   padding-right: 100px;
 }
 `;

 const PointsStyle = styled.h4`
 text-align: center;
 `;

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
      Communication: 0,
      Creativity: 0,
      Innovation: 0,
      Leadership: 0,
      Media: 0,
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
        Communication: 0,
        Creativity: 0,
        Innovation: 0,
        Leadership: 0,
        Media: 0,
        "Problem-solving": 0,
        Teamwork: 0,
        Technology: 0
      };
      // loop through each skill
      allBadges.forEach(skill => {
        // loop through each activity for this user
        data.forEach(activity => {
          // if the curr actvitity involves current skill
          if (activity.fields.skills.includes(skill)) {
            // increase the number of points by the amount per skill in that activity
            temporarySkillPoints[skill] = temporarySkillPoints[skill] +=
              activity.fields.pointsPerSkill;
          }
        });
      });
      // After running through all skills/acticities, update the state of skill points with the copy
      setSkillPoints(temporarySkillPoints);
    }
  }, [data]);

  if (!data) {
    return (<p>Loading...</p>)
  }

  return (
    <BadgesStyle>
      {badges.map(item => {
        return (
          <ListBadges>
            <h3>{item}</h3>
            <img src={`assets/${item}.svg`} alt={item} />
            {!selectedBadges ? <PointsStyle>Points:{skillPoints[item]}</PointsStyle> : ""}
          </ListBadges>
        );
      })}
    </BadgesStyle>
  );
}
