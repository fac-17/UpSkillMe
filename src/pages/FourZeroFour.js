import React from "react";
import { Redirect, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "../theme";

export default function FourZeroFour() {
  return (
    <section>
      <h1>Sorry, that page doesn't exist!</h1>
      <a href="/">
        <button>Click to return to log on page</button>
      </a>
    </section>
  );
}
