import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
export default function Profile({ data, emailInput }) {
  const [avatar] = React.useState("assets/avatarAlien.svg");
  const [totalScore, setTotalScore] = React.useState(10);
||||||| merged common ancestors
export default function Profile({ data, emailInput }) {
    const [avatar, setAvatar] = React.useState("assets/avatarAlien.svg");
    const [totalScore, setTotalScore] = React.useState(10);
=======
// Styled components
const ProfileStyle = styled.section`
  flex-direction: column;
  text-align: center;
  background-color: #ecebe4;
`;

const EmailStyle = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
>>>>>>> master

<<<<<<< HEAD
  // Runs every time the data changes/page loads, update the total score
  React.useEffect(() => {
    if (data) {
      let tempTotalPoints = 0;
      data.forEach(activity => {
        tempTotalPoints +=
          activity.fields["totalPoints (Activity points x duration)"];
      });
      setTotalScore(tempTotalPoints);
||||||| merged common ancestors
    // Runs every time the data changes/page loads, update the total score
    React.useEffect(() => {
        if (data) {
            let tempTotalPoints = 0
            data.forEach(activity => {
                tempTotalPoints += activity.fields['totalPoints (Activity points x duration)']
            })
            setTotalScore(tempTotalPoints)
        }

    }, [data])

    if (!data) {
        return (<p>Loading</p>)
=======
  @media (max-width: 414px) {
    font-size: 1.2em;
  }
`;
const PointsStyle = styled.h2`
  padding-bottom: 20px;
  @media (max-width: 414px) {
    font-size: 1.2em;
  }
`;

export default function Profile({ data, emailInput }) {
  const [avatar, setAvatar] = React.useState("assets/avatarAlien.svg");
  const [totalScore, setTotalScore] = React.useState(10);

  // Runs every time the data changes/page loads, update the total score
  React.useEffect(() => {
    if (data) {
      let tempTotalPoints = 0;
      data.forEach(activity => {
        tempTotalPoints +=
          activity.fields["totalPoints (Activity points x duration)"];
      });
      setTotalScore(tempTotalPoints);
>>>>>>> master
    }
  }, [data]);

<<<<<<< HEAD
  if (!data) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <h1>{emailInput}</h1>
      <img src={avatar} alt="this is our avatar pic" width="200px" />
      <h2>{totalScore} total points</h2>
    </div>
  );
}
||||||| merged common ancestors
=======
  if (!data) {
    return <p>Loading</p>;
  }
  return (
    <ProfileStyle>
      <EmailStyle>{emailInput}</EmailStyle>
      <img src={avatar} alt="this is our avatar pic" width="200px" />
      <PointsStyle>{totalScore} total points</PointsStyle>
    </ProfileStyle>
  );
}
>>>>>>> master
