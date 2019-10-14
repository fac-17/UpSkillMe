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
  const [infoSlider, setInfoSlider] = React.useState('achievements')

  const textDescription = {
    'achievements': 'Track your achievements',
    'opportunities': 'Discover new opportunities',
    'potential': 'Achieve your potential '
  }

  return (
    <Div>
      <H1><img src={logo} alt="logo" width="150px" /></H1>
      <img src={`assets/${infoSlider}.svg`} alt="info image" width="150px" />
      <p>{textDescription[infoSlider]}</p>
      <svg onClick={() => { setInfoSlider('achievements') }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="15" fill={infoSlider === 'achievements' ? 'blue' : 'black'} />
      </svg>

      <svg onClick={() => { setInfoSlider('opportunities') }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="15" fill={infoSlider === 'opportunities' ? 'blue' : 'black'} />
      </svg>

      <svg onClick={() => { setInfoSlider('potential') }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="15" fill={infoSlider === 'potential' ? 'blue' : 'black'} />
      </svg>



      {/* <button className="circle-one" onClick={() => { setInfoSlider('achievements') }}>One</button>
      <button className="circle-two" onClick={() => { setInfoSlider('opportunities') }}>Two</button>
      <button className="circle-three" onClick={() => { setInfoSlider('potential') }}>Three</button> */}
      <LogInForm emailInput={emailInput} setEmailInput={setEmailInput} />
      <SignUpForm emailInput={emailInput} setEmailInput={setEmailInput} />
    </Div>
  );
}
