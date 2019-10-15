import React from "react";
import Opportunity from "../opportunity/Opportunity";

export default function OpportunitiesList({ opportunities }) {
  if (!opportunities) {
    return <h3>Opportunities not loaded...</h3>;
  }

  console.log("this is an", opportunities);
  return (
    <div>
      <h2>Opportunities List</h2>
      <h3>
        Displaying {opportunities.length} of {opportunities.length}
      </h3>
      {opportunities.map((opportunity, index) => {
        return (
          <Opportunity
            key={opportunity.id}
            opportunity={opportunity}
            index={index}
            // opportunities={opportunities}
          />
        );
      })}
    </div>
  );
}
