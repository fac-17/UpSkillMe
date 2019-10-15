import React from "react";
import LogInForm from "../components/log-in-form/LogInForm";
import SignUpForm from "../components/sign-up-form/SignUpForm"
import { ThemeProvider } from "styled-components";
import theme from '../theme';
import { Div, Image, CircleSelection, Button, Circle, SignUpButton, ButtonContainer, InfoSection, FormSection } from "./LandingPageStyle";


export default function LogInPage({ emailInput, setEmailInput }) {
  const [logo, setLogo] = React.useState("assets/UpSkillMe_logo.png");
  const [infoSlider, setInfoSlider] = React.useState('achievements')
  const [pageState, setPageState] = React.useState('');
  const textDescription = {
    'achievements': 'Track your achievements',
    'opportunities': 'Discover new opportunities',
    'potential': 'Achieve your potential '
  }
  let intervalId;

  React.useEffect(() => {
    intervalId = setInterval(() => {
      if (infoSlider === 'achievements') {
        setInfoSlider('opportunities');
      }
      else if (infoSlider === 'opportunities') {
        setInfoSlider('potential');
      }
      else if (infoSlider === 'potential') {
        setInfoSlider('achievements');
      }
    }
      , 3000)
    return () => { clearInterval(intervalId) }
  }, [infoSlider])

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Image src={logo} alt="logo" width="100px" />
        <InfoSection pageState={pageState} >
          <img src={`assets/${infoSlider}.svg`} alt="info image" width="150px" />
          <p>{textDescription[infoSlider]}</p>
          <CircleSelection>

            <Circle onClick={() => { setInfoSlider('achievements') }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill={infoSlider === 'achievements' ? 'black' : '#C4C4C4'} />
            </Circle>
            <Circle onClick={() => { setInfoSlider('opportunities') }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill={infoSlider === 'opportunities' ? 'black' : '#C4C4C4'} />
            </Circle>
            <Circle onClick={() => { setInfoSlider('potential') }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill={infoSlider === 'potential' ? 'black' : '#C4C4C4'} />
            </Circle>
          </CircleSelection>
          <ButtonContainer>
            <Button className="show-login" onClick={() => { setPageState('login') }}>Login</Button>
            <Button className="show-signup" onClick={() => { setPageState('signup') }}>Signup</Button>
          </ButtonContainer>
        </InfoSection >

        {pageState === 'login' ?
          <FormSection>
            <LogInForm emailInput={emailInput} setEmailInput={setEmailInput} />
            <SignUpButton onClick={() => { setPageState('') }}>Back</SignUpButton>
          </FormSection> : pageState === 'signup' ?
            <FormSection><SignUpForm emailInput={emailInput} setEmailInput={setEmailInput} />
              <SignUpButton onClick={() => { setPageState('') }}>Back</SignUpButton>
            </FormSection> : ''}
      </Div >
    </ThemeProvider>
  );
}
