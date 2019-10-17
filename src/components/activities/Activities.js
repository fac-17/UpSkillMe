import React from "react";
import Activity from "../activity/Activity";

import {
   H2, H3
} from "./Activities.style"

export default function Activities({ activities }) {
  if (!activities) {
    return <h3> Activities not loaded...</h3>;
  }
  return (
    <div>
      <H2>Activity log</H2>
      <H3>
        Displaying {activities.length} of {activities.length}
      </H3>
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
