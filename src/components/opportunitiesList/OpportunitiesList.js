import React from "react";
import Opportunity from "../opportunity/Opportunity"
// import Opportunity from "";

export default function OpportunitiesList({ opportunities }) {
  if (!opportunities) {
    return <h3>Opportunities not loaded...</h3>;
  }
  return (
    <div>
      <h2>Opportunities List</h2>
      <h3>
        Displaying {opportunities.length} of {opportunities}
      </h3>
      {opportunities.map((opportunity, index) => {
        return (
          <Opportunity
            key={opportunity.id}
            opportunity={opportunity}
            index={index}
              opportunities={opportunities}
          />
        );
      })}
    </div>
  );
}
