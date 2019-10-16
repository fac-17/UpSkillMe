import React from "react";
import Opportunity from "../opportunity/Opportunity";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
// import LogOutButton from "../../components/log-out-button/log-out-button";

import{
  H2, 
  H3
} from "./OpportunitiesList.style";

export default function OpportunitiesList({ opportunities }) {
  if (!opportunities) {
    return <h3>Opportunities not loaded...</h3>;
  }

  return (
    <div>
      {/* <LogOutButton setLoggedOut={setLoggedOut} setEmailInput={setEmailInput} /> */}
      <H2>Opportunities List</H2>
      <H3>
        Displaying {opportunities.length} of {opportunities.length}
      </H3>
      {opportunities.map((opportunity, index) => {
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
