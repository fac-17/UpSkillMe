import React from "react";
import LogInForm from "../components/log-in-form/LogInForm";
import SignUpForm from "../components/sign-up-form/SignUpForm"
import styled from "styled-components";

const Div = styled.div` 
  display: block;
  width: 90%;
  margin: 20px;
  // background-color: #ecebe4;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

// export default function Profile({ data, emailInput }) {
//   const [avatar, setAvatar] = React.useState("assets/avatarAlien.svg");


export default function LogInPage({ emailInput, setEmailInput }) {
  const [logo, setLogo] = React.useState("assets/UpSkillMe_logo.png");
  return (
    <Div>
      <H1><img src={logo} alt="logo" width="150px" /></H1>
      <LogInForm emailInput={emailInput} setEmailInput={setEmailInput} />
      <SignUpForm emailInput={emailInput} setEmailInput={setEmailInput} />
    </Div>
  );
}
