import React from "react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import { Redirect, Route } from "react-router-dom";
import { Input, H2, EmailInput, SimpleForm } from "./LogInFormStyle";
import { Label } from "../common/common";
import {CirclePicker} from "react-color";

const hexColourNameMap = {
  '#37d67a': 'Green', '#2ccce4': 'Blue', '#555555': 'Black', '#dce775': 'Yellow', '#ff8a65': 'Orange', '#ba68c8': 'Pink'
}

export default function LogInform({ emailInput, setEmailInput, colour, setColour }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [currentColour, setCurrentColour] = React.useState('#37d67a');
  const [currEmailInput, setCurrEmailInput] = React.useState("");
  const handleLogInSubmit = async e => {
    e.preventDefault();
    const emailStringified = JSON.stringify({email: currEmailInput});
    const response = await fetch(`/.netlify/functions/GetUserData?email=${emailStringified}`);
    const json = await response.json();
    const correctColour = json.records[0].fields.colour;
    console.log(correctColour)
    console.log(hexColourNameMap[currentColour])
    console.log(emailInput)

    if (hexColourNameMap[currentColour] === correctColour) {
      setEmailInput(currEmailInput);
      setColour(currentColour);
      setSubmitted(true);
    }
  };

  if (submitted && emailInput && colour) {
    return (
      <Route>
        <Redirect to={{ pathname: "/profile", emailInput: emailInput, colour: colour }} />
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
          <p>Pick your colour</p>
          <CirclePicker colors={['#37d67a', '#2ccce4', '#555555', '#dce775', '#ff8a65', '#ba68c8']}
                        onChange={(colour) => {
                          console.log(colour.hex)
                          setCurrentColour(colour.hex)
                        }}/>
          <p style={{color: currentColour}}>{hexColourNameMap[currentColour]}</p>

          <Input style={{marginTop: "50px"}} type="submit"/>
        </SimpleForm>
      </section>
    </ThemeProvider>
  );
}
