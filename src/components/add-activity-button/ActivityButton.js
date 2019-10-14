import React from "react";
import styled from "styled-components";

//Styled components
const ActivityButtonStyle= styled.button`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  font-size: 1em;
  background-color: #109cf1;
  color: white;
`;

const PlusStyle = styled.span`
  font-size: 1.5em;
  color: white;
`;

//

export default function ActivityButton() {
  return <ActivityButtonStyle>
    Add Activity <br></br>
    <PlusStyle>+</PlusStyle>
    </ActivityButtonStyle>;
}
