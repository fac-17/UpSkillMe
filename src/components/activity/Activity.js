import React from "react";
import Badges from "../../components/badges/Badges";
import styled from "styled-components";

// Styled components
const ListStyle = styled.ul`
  padding: 0;
  list-style: none;
  border: 2px solid black;
  border-radius: 25px;
  margin: 10px;
  margin-bottom: 20px;
  text-align: center;
  padding-bottom: 20px;
  font-size: 1.5rem;
`;

const ActivityLinkButton = styled.button`
  border-radius: 20px;
  padding: 0.5%;
  border-radius: 5px;
  font-size: 1em;
  background-color: #109cf1;
  color: white;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
`;

export default function Activity({ activity, index, activities }) {
  if (!activity) {
    return <h2> Activity not loaded..</h2>;
  }

  return (
    <ListStyle>
      <h4> Activity #{index + 1} </h4>
      <li>{activity.fields.nameOfActivity}</li>
      <li>{activity.fields.daysAgo} days ago</li>
      <li>{activity.fields.durationHours} Hours</li>
      <li>
        <Badges selectedBadges={activity.fields.skills} data={activities} />
      </li>
      <li>
        {activity.fields["totalPoints (Activity points x duration)"]} points
      </li>

      {activity.fields.link ? (
        <li>
          <a href={activity.fields.link}>
            <ActivityLinkButton>
              View confirmation
              {
                <img
                  src="../../../public/assets/link.png"
                  alt="link-symbol"
                ></img>
              }
            </ActivityLinkButton>
          </a>
        </li>
      ) : (
        ""
      )}
    </ListStyle>
  );
}
