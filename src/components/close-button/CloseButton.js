import React from "react";
import styled from "styled-components";

const CloseButtonStyle = styled.button`
  display: ${props => props.closeButtonDisplay};
  height: 3%;
  width: 3%;
  position: absolute;
  right: 6%;
  top: 2%;
  box-sizing: border-box;
  line-height: 3%;

  background-color: white;
  border-color: white;

  &:before,
  &:after {
    transform: rotate(-45deg);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 1%;
    margin-left: 1%;
    display: block;
    height: 10px;
    width: 50px;
    background-color: black;
    transition: all 0.2s ease-out;
  }

  &:after {
    transform: rotate(45deg);
  }

  &:hover {
    &:before,
    &:after {
      transform: rotate(0deg);
    }
  }
`;

export default function CloseButton({
  closeButtonDisplay,
  setCloseButtonDisplay,
  setFormDisplayed,
  isFormDisplayed,
  activityButtonDisplay,
  setActivityButtonDisplay
}) {
  function handleCloseButton(e) {
    setCloseButtonDisplay(
      closeButtonDisplay === "none" ? "inline-block" : "none"
    );
    setFormDisplayed(isFormDisplayed === "block" ? "none" : "block");
    setActivityButtonDisplay(
      activityButtonDisplay === "block" ? "none" : "block"
    );
  }

  return (
    <CloseButtonStyle
      closeButtonDisplay={closeButtonDisplay}
      onClick={handleCloseButton}
    ></CloseButtonStyle>
  );
}
