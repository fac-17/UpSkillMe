import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
// import { Button } from "../common/common";
// import { ButtonStyle } from "../log-out-button/log-out-button";

import {
  Div,
  Ul,
  Li,
  H3,
  H4,
  Button, Hr
} from "./Opportunity.style";

export default function Opportunity({ opportunity, index }) {
  if (!opportunity) {
    return <h2>Opportunity not loaded...</h2>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Ul>
          <H3> {opportunity.fields.nameOfOpportunity}</H3>
          <H4>{opportunity.fields.organisation} </H4>
          <Hr></Hr>
          <Li>{opportunity.fields.date}</Li>
          <Li>{opportunity.fields.address}</Li>
          {/* <Li>{opportunity.fields.activityType}</Li> */}
          <a href={opportunity.fields.link}><Button>More info</Button></a>
        </Ul>
      </Div>
    </ThemeProvider>
  );
}
