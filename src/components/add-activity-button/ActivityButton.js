import React from "react";
import styled from "styled-components";

//Styled components
const ActivityButtonStyle = styled.button`
  display: ${props => props.activityButtonDisplay};
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

export default function ActivityButton({
  isFormDisplayed,
  setFormDisplayed,
  activityButtonDisplay,
  setActivityButtonDisplay
}) {
  function handleShowAddActivityForm(e) {
    setFormDisplayed(isFormDisplayed === "block" ? "none" : "block");
    setActivityButtonDisplay(
      activityButtonDisplay === "block" ? "none" : "block"
    );
  }

  return (
    <ActivityButtonStyle
      activityButtonDisplay={activityButtonDisplay}
      onClick={handleShowAddActivityForm}
    >
      Add Activity <br></br>
      <PlusStyle>+</PlusStyle>
    </ActivityButtonStyle>
  );
}
