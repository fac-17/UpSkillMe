import React from "react";
import LogInForm from "../components/log-in-form/LogInForm";
import SignUpForm from "../components/sign-up-form/SignUpForm"
import styled from "styled-components";

const Div = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const CircleSelection = styled.div`
/* display: ${pageState => pageState === 'start' ? 'block' : 'hidden'}; */
display: flex;
flex-direction: row;
align-items: center;
`
const Circle = styled.svg`
  margin: 0 0.5rem;
`
const Button = styled.button`
  border-radius: 0.5rem;
width: 6rem;
height: 2rem;
font-size: 1rem;
text-align: center;
margin: 3rem  0.5rem;
`
const SignUpButton = styled.button`
border-radius: 0.5rem;
width: 6rem;
height: 2rem;
font-size: 1rem;
text-align: center;
margin: 3rem  0.5rem;
margin-left:auto;
margin-right:auto;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const InfoSection = styled.div`
display: ${props => props.pageState === '' ? 'flex' : 'none'};
flex-direction: column;
align-items: center;
`

const FormSection = styled.section`
display:flex;
width:100%;
flex-direction: column;
align-items: center;
`

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
    <Div>
      <H1><img src={logo} alt="logo" width="100px" /></H1>
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
  );
}
