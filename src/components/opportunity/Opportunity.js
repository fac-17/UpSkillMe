import React from "react";
import styled from "styled-components";

export default function Opportunity({ opportunity, index }) {
  if (!opportunity) {
    return <h2>Opportunity not loaded...</h2>;
  }
  console.log(opportunity);

  return (
    <ul>
      <h4> Opportunity #{index + 1}</h4>
      <li>{opportunity.fields.nameOfOpportunity}</li>
      <li>{opportunity.fields.organisation} </li>
      <li>{opportunity.fields.date}</li>
      <li>{opportunity.fields.address}</li>
      <li>{opportunity.fields.link}</li>
    </ul>
  );
}
