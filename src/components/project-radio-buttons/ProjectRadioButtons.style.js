import styled from "styled-components";

const RadioButtons = styled.div`
.radio-buttons
  $radio-color: #5eab9f;
  margin-bottom: 24px;
  +ordered-margin(bottom, 32px);
  & label
    padding-left: 30px:
    margin-right: 30px:
    width: 24%;
    display: block;
    cursor: pointer;
    position: relative;
    font-size: 16px;
    letter-spacing: 0.1px;
    text-align: left;
    color: #484848;
    white-space: nowrap;
    font-weight: unset;
    & i
      position: absolute;
      margin-left: -30px;
      width: 22px;
      height: 22px;
      border: solid 3px $radio-color;
      border-radius: 50%;
      &.inner
        width: 10px;
        height: 10px;
        background-color: $radio-color;
        transform: translate(6px, 6px);
        display: none;
    &:active i.outer, & i.outer:active;
      background-color: rgba(53, 176, 164, 0.9);
    & input[type="radio"]
      display: none;
      &:checked ~ i.inner
        display: block;
`;

const Button = styled.button`
  width: 30px
  height: 30px;
  border: 1px solid #222
  outline: none
  &.active
    background-color: #24b47a`;

export {RadioButtons, Button}