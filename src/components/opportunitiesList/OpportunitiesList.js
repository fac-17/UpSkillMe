import React from "react";
import Opportunity from "../opportunity/Opportunity";
import FilterOpportunityButton from '../filter-opportunity-button/FilterOpportunityButton';
import { ButtonDiv } from '../filter-opportunity-button/FilterOpportunityButton.style';
import { H2,H3 } from "./OpportunitiesList.style";

export default function OpportunitiesList({ opportunities, category, setCategory, categories }) {
  if (!opportunities) {
    return <h3>Opportunities not loaded...</h3>;
  }

  if(category !== "") {
  return (
    <div>
      {/* <LogOutButton setLoggedOut={setLoggedOut} setEmailInput={setEmailInput} /> */}
      <H2>Up Skill Opportunities</H2>
      <H3>
        Develop skills for your future success
      </H3>
      <ButtonDiv>
        {
          categories
          .map((category, index) => {
            console.log("button category", category);
            return (
              <FilterOpportunityButton
              key={category}
              category={category}
              setCategory={setCategory}
              index={index}>
              {category}
              </FilterOpportunityButton>
            );
          })
        }
      </ButtonDiv>
        {opportunities
        .filter((o) => o.fields.Category === category )
        .map((opportunity, index) => {
        return (
          <Opportunity
            key={opportunity.id}
            opportunity={opportunity}
            index={index}
          />
        );
      })}
    </div>
  );
} else {
  return (
    <div>
      <H2>Up Skill Opportunities</H2>
      <H3>
        Develop skills for your future success
      </H3>
      <ButtonDiv>
        {
          categories
          .map((category) => {
            console.log("button category", category);
            return (
              <FilterOpportunityButton
              key={category}
              category={category}
              setCategory={setCategory}>
              {category}
              </FilterOpportunityButton>
            );
          })
        }
      </ButtonDiv>
        {opportunities
        .map((opportunity, index) => {
        return (
          <Opportunity
            key={opportunity.id}
            opportunity={opportunity}
            index={index}
          />
        );
      })}
    </div>
  );
 }
}
