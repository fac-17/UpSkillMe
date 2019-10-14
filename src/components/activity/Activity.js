import React from "react";
import Badges from "../../components/badges/Badges";

export default function Activity({ activity, index, activities }) {
  if (!activity) {
    return <h2> Activity not loaded..</h2>;
  }

  return (
    <ul>
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
      {activity.fields.link ? <li>{activity.fields.link}</li> : ""}
    </ul>
  );
}
