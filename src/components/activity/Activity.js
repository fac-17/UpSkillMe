import React from "react";
import Badges from "../../components/badges/Badges";

import {
  Div,
  ListStyle,
  ActivityLinkButton,
  StyledImg,
  H3,
  Hr
} from "./Activity.style";

export default function Activity({ activity, index, activities }) {
  if (!activity) {
    return <h2> Activity not loaded..</h2>;
  }

  return (
    <Div>
      <ListStyle>
        <H3> Activity name: {activity.fields.nameOfActivity} </H3>
        <br></br>
        <li>Completed {activity.fields.daysAgo} days ago</li>
        <br></br>
        <li>Total hours: {activity.fields.durationHours} </li>
        <Hr />
        <li>
          <Badges selectedBadges={activity.fields.skills} data={activities} />
        </li>
        <li>
          {activity.fields["totalPoints (Activity points x duration)"]} points
        </li>

        {activity.fields.link ? (
          <li>
            <a href={activity.fields.link}>
              <ActivityLinkButton>View confirmation</ActivityLinkButton>
            </a>
          </li>
        ) : (
          ""
        )}
      </ListStyle>
    </Div>
  );
}
