import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

//Styled components
const ActivityButtonStyle = styled.button`
  display: ${props => props.activityButtonDisplay};
  border-radius: 100%;
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 1.2em;
  font-weight: 800;
  background-color: white;
  text-align: center;
  color: #109cf1;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  border: solid 4px #109cf1
  transition: all 0.4s ease 0s;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);


  &:hover {
    color: #ffffff !important;
    background: #109cf1;
    border-color: #109cf1 !important;
    transition: all 0.4s ease 0s;

  }
`;

export default function ActivityButton({
  isFormDisplayed,
  setFormDisplayed,
  activityButtonDisplay,
  setActivityButtonDisplay,
  closeButtonDisplay,
  setCloseButtonDisplay
}) {
  function handleShowAddActivityForm(e) {
    setFormDisplayed(isFormDisplayed === "block" ? "none" : "block");
    setActivityButtonDisplay(
      activityButtonDisplay === "block" ? "none" : "block"
    );
    setCloseButtonDisplay(closeButtonDisplay === "block" ? "none" : "block");
    scroll.scrollToBottom();
  }

  return (
    <ActivityButtonStyle
      activityButtonDisplay={activityButtonDisplay}
      onClick={handleShowAddActivityForm}
    >
      Add Activity <br></br> +
    </ActivityButtonStyle>
  );
}
