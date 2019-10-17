import React from "react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import { Redirect, Route } from "react-router-dom";
import { Input, H2, EmailInput, SimpleForm } from "./LogInFormStyle";
import { Label } from "../common/common";

export default function LogInform({ emailInput, setEmailInput }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [currEmailInput, setCurrEmailInput] = React.useState("");
  const handleLogInSubmit = e => {
    e.preventDefault();
    setEmailInput(currEmailInput);
    setSubmitted(true);
  };

  if (submitted && emailInput) {
    return (
      <Route>
        <Redirect to={{ pathname: "/profile", emailInput: emailInput }} />
      </Route>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <section className="login-form">
        <H2> Log In</H2>
        <SimpleForm onSubmit={handleLogInSubmit}>
          <Label>
            {/* Enter email: <br></br> */}
            <EmailInput
              placeholder="Enter email:"
              required
              type="email"
              value={currEmailInput}
              onChange={e => setCurrEmailInput(e.target.value)}
            />
          </Label>
          <label>
            <Input type="submit" />
          </label>
        </SimpleForm>
      </section>
    </ThemeProvider>
  );
}
