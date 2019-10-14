import React from "react";
import styled from "styled-components";

//Styled components
const ActivityButtonStyle = styled.button`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 5px;
  right: 5px;
  font-size: 1.25em;
  background-color: #109cf1;
  color: white;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
`;

const PlusStyle = styled.span`
  font-size: 1.5em;
  color: white;
`;

//

export default function ActivityButton() {
  function handleShowAddActivityForm(e) {}

  return (
    <ActivityButtonStyle onClick={handleShowAddActivityForm}>
      Add Activity <br></br>
      <PlusStyle>+</PlusStyle>
    </ActivityButtonStyle>
  );
}
