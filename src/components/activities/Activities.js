import React from "react";
import Activity from "../activity/Activity";

export default function Activities({ activities }) {
  if (!activities) {
    return <h1> Loading...</h1>;
  }
  return (
    <div>
      <h2>Activity log</h2>
      <h3>
        Displaying {activities.length} of {activities.length}
      </h3>
      {activities.map((activity, index) => {
        return <Activity activity={activity} index={index} />;
      })}
    </div>
  );
}
