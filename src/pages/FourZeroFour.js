import React from "react";
import { Redirect, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "../theme";
import {
  FourZeroFourSection,
  FourZeroFourBody,
  H1,
  H2,
  ReturnButton,
  SpaceshipImage
} from "./FourZeroFourStyle";

export default function FourZeroFour() {
  const [spaceship, setSpaceship] = React.useState("assets/FourZeroFour.svg");

  return (
    <ThemeProvider theme={theme}>
      <FourZeroFourBody>
        <FourZeroFourSection>
          <H1>Ooops!!!</H1>
          <SpaceshipImage
            src={spaceship}
            alt="spaceship"
            width="200px"
          ></SpaceshipImage>
          <H2>404! Sorry, that page doesn't exist!</H2>
          <a href="/">
            <ReturnButton>Return to Home</ReturnButton>
          </a>
        </FourZeroFourSection>
      </FourZeroFourBody>
    </ThemeProvider>
  );
}
