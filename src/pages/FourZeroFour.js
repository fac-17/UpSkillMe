import React from "react";
import { Redirect, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "../theme";
import {
  FourZeroFourSection,
  FourZeroFourBody,
  H1,
  H2,
  ReturnButton
} from "./FourZeroFourStyle";

const [spaceship, setSpaceship] = React.useState(
  "./../../public/assets/FourZeroFour.svg"
);

export default function FourZeroFour() {
  return (
    <ThemeProvider theme={theme}>
      <FourZeroFourBody>
        <FourZeroFourSection>
          <H1>Ooops</H1>
          <img src={spaceship} alt="spaceship"></img>
          <H2>404! Sorry, that page doesn't exist!</H2>
          <a href="/">
            <ReturnButton>Return to Home</ReturnButton>
          </a>
        </FourZeroFourSection>
      </FourZeroFourBody>
    </ThemeProvider>
  );
}
