import React from "react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import { Redirect, Route } from "react-router-dom";
import { Input, H2, EmailInput, SimpleForm, PasswordInput } from "./LogInFormStyle";
import { Label } from "../common/common";
import {CirclePicker} from "react-color";

const hexColourNameMap = {
  '#37d67a': 'Green', '#2ccce4': 'Blue', '#555555': 'Black', '#dce775': 'Yellow', '#ff8a65': 'Orange', '#ba68c8': 'Pink'
}

export default function LogInform({ emailInput, setEmailInput, colour, setColour, passwordInput, setPasswordInput }) {

  const [submitted, setSubmitted] = React.useState(false);
  const [currentColour, setCurrentColour] = React.useState('#37d67a');
  const [currEmailInput, setCurrEmailInput] = React.useState("");
  const [currPasswordInput, setCurrPasswordInput] = React.useState("");
  const [currentError, setCurrentError] = React.useState("");

  const handleLogInSubmit = async e => {
    e.preventDefault();
    const emailStringified = JSON.stringify({email: currEmailInput});
    const response = await fetch(`/.netlify/functions/GetUserData?email=${emailStringified}`);
    const json = await response.json();
    const correctColour   = json.records[0].fields.colour;
    const correctPassword = json.records[0].fields.pass;

    if (currPasswordInput !== correctPassword) {
      setCurrentError("That password isn't quite right try again or use the forgot password button");
      setSubmitted(false);
    }

    if (correctPassword === currPasswordInput) {
      setEmailInput(currEmailInput);
      setPasswordInput(currPasswordInput);
      setColour(correctColour);
      setSubmitted(true);
    }

  };

  if (submitted && emailInput && colour && passwordInput) {
    return (
      <Route>
        <Redirect to={{ pathname: "/profile", emailInput: emailInput, colour: colour, passwordInput: passwordInput }} />
      </Route>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <section className="login-form">
        <H2>Log In</H2>
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
          <Label style={{marginTop: '2em'}}>
            <PasswordInput
              placeholder="Enter Password"
              required
              type="password"
              value={currPasswordInput}
              onChange={e => setCurrPasswordInput(e.target.value)}
            />
          </Label>
          <p>Pick your colour</p>
          <CirclePicker colors={['#37d67a', '#2ccce4', '#555555', '#dce775', '#ff8a65', '#ba68c8']}
                        onChange={(colour) => {
                          console.log(colour.hex)
                          setCurrentColour(colour.hex)
                        }}/>
          <p style={{color: currentColour}}>{hexColourNameMap[currentColour]}</p>
          <p style={{color: "#787881"}}>{currentError}</p>
          <Input style={{marginTop: "50px"}} type="submit" value="Login"/>
        </SimpleForm>
      </section>
    </ThemeProvider>
  );
}
