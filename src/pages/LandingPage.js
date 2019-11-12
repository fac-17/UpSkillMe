import React from "react";
import LogInForm from "../components/log-in-form/LogInForm";
import SignUpForm from "../components/sign-up-form/SignUpForm";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import {
  ImageDescription,
  Div,
  Image,
  CircleSelection,
  Circle,
  SignUpButton,
  ButtonContainer,
  InfoSection,
  FormSection,
  LandingBody
} from "./LandingPageStyle";
import { Button } from "../components/common/common";
import { LANDING_PAGE_TEXT_DESCRIPTIONS as TEXTDESCRIPTION } from "../constants";
import setSliderInterval from "../utils/setSliderInterval";
import {useTracker} from "../utils/customHooks";

export default function LogInPage({ emailInput, setEmailInput }) {
  const [logo, setLogo] = React.useState("assets/UpSkillMe_logo.png");
  const [infoSlider, setInfoSlider] = React.useState("achievements");
  const [pageState, setPageState] = React.useState("");

  useTracker('/');

  let intervalId;
  React.useEffect(() => {
    intervalId = setSliderInterval(infoSlider, setInfoSlider, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [infoSlider]);

  return (
    <ThemeProvider theme={theme}>
      <LandingBody>
        <Div>
          <Image src={logo} alt="logo" width="100px" />
          <InfoSection pageState={pageState}>
            <img
              src={`assets/${infoSlider}.svg`}
              alt="info image"
              width="150px"
            />
            <ImageDescription>{TEXTDESCRIPTION[infoSlider]}</ImageDescription>
            <CircleSelection>
              <Circle
                onClick={() => {
                  setInfoSlider("achievements");
                }}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="15"

                  fill={
                    infoSlider === "achievements"
                      ? theme.primaryColor
                      : theme.mainWhiteColor
                  }
                />
              </Circle>
              <Circle
                onClick={() => {
                  setInfoSlider("opportunities");
                }}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="15"

                  fill={
                    infoSlider === "opportunities"
                      ? theme.primaryColor
                      : theme.mainWhiteColor
                  }
                />
              </Circle>
              <Circle
                onClick={() => {
                  setInfoSlider("potential");
                }}
                width="30"
                height="30"
                viewBox="0 0 30 30"

                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="15"

                  fill={
                    infoSlider === "potential"
                      ? theme.primaryColor
                      : theme.mainWhiteColor
                  }
                />
              </Circle>
            </CircleSelection>
            <ButtonContainer>
              <Button
                className="show-login"
                onClick={() => {
                  setPageState("login");
                }}
              >
                Login
              </Button>
              <Button
                className="show-signup"
                onClick={() => {
                  setPageState("signup");
                }}
              >
                Signup
              </Button>
            </ButtonContainer>
          </InfoSection>

          {pageState === "login" ? (
            <FormSection>
              <LogInForm
                emailInput={emailInput}
                setEmailInput={setEmailInput}
              />
              <Button
                onClick={() => {
                  setPageState("");
                }}
              >
                Back
              </Button>
            </FormSection>
          ) : pageState === "signup" ? (
            <FormSection>
              <SignUpForm
                emailInput={emailInput}
                setEmailInput={setEmailInput}
              />
              <Button
                onClick={() => {
                  setPageState("");
                }}
              >
                Back
              </Button>
            </FormSection>
          ) : (
            ""
          )}
        </Div>
      </LandingBody>
    </ThemeProvider>
  );
}
