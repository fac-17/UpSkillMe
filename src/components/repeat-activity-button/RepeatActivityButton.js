import React from "react";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

//Styled components
const RepeatActivityButtonStyle = styled.button`
  position: relative;
  float: right;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  bottom: 10px;
  right: 10px;
  font-size: 1.2em;
  font-weight: 800;
  background-color: white;
  text-align: center;
  color: #109cf1;
  cursor: pointer;

  border: solid 4px #109cf1
  transition: all 0.4s ease 0s;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);


  &:hover {
    color: #ffffff !important;
    background: #109cf1;
    border-color: #109cf1 !important;
    transition: all 0.4s ease 0s;
    .repeat-activity {
        filter: brightness(0) invert(1);
        transition: all 0.1s ease 0s;
    }
    
  }
`;

export default function RepeatActivityButton({
                                                 isFormDisplayed,
                                                 setFormDisplayed,
                                                 activityButtonDisplay,
                                                 setActivityButtonDisplay,
                                                 closeButtonDisplay,
                                                 setCloseButtonDisplay,
                                                 activityName,
                                                 setActivityName,
                                                 activityType,
                                                 setActivityType,
                                                 badgeValues,
                                                 setBadgeValues,
                                                 setCopyActivity,
                                                 Project,
                                                 setProject
                                             }) {
    function handleShowAddActivityForm(e) {
        setFormDisplayed("block");
        setActivityButtonDisplay(
            activityButtonDisplay === "block" ? "none" : "block"
        );
        setCopyActivity(true);
        setActivityName(activityName);
        setActivityType(activityType);
        setProject(Project);
        setBadgeValues(badgeValues);
        setCloseButtonDisplay(closeButtonDisplay === "block" ? "none" : "block");
        scroll.scrollToBottom();
    }

    return <RepeatActivityButtonStyle onClick={handleShowAddActivityForm}>
        {Project === 'FALSE' ? "Repeat Activity" : "Repeat Project"}
        <br/>
        <img
            className={"repeat-activity"}
            src={`assets/RepeatActivity.svg`}
            alt="info image"
            width="30px"
        />
    </RepeatActivityButtonStyle>;
}
