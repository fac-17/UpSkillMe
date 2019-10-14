import React from "react";
import Activity from "../activity/Activity";

export default function Activities({ activities }) {
  if (!activities) {
    return <h3> Activities not loaded...</h3>;
  }
  console.log("these are the activiteis", activities);
  return (
    <div>
      <h2>Activity log</h2>
      <h3>
        Displaying {activities.length} of {activities.length}
      </h3>
      {activities.map((activity, index) => {
        return (
          <Activity
            key={activity.id}
            activity={activity}
            index={index}
            activities={activities}
          />
        );
      })}
    </div>
  );
}
