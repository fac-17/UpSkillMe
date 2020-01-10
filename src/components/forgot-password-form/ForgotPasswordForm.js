import React from "react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import { Input, H2, EmailInput, SimpleForm, PasswordInput } from "./ForgotPasswordForm.style";
import { Label } from "../common/common";
import {CirclePicker} from "react-color";

let hexColourNameMap;
hexColourNameMap = {
    '#37d67a': 'Green',
    '#2ccce4': 'Blue',
    '#555555': 'Black',
    '#dce775': 'Yellow',
    '#ff8a65': 'Orange',
    '#ba68c8': 'Pink'
};

export default function ForgotPasswordForm({setPageState}) {

  const [submitted, setSubmitted] = React.useState(false);
  const [currentColour, setCurrentColour] = React.useState('#37d67a');
  const [currEmailInput, setCurrEmailInput] = React.useState("");
  const [currNewPasswordInput, setCurrNewPasswordInput] = React.useState("");

  const handleForgotPasswordSubmit = async e => {
    e.preventDefault();
    const emailStringified = JSON.stringify({email: currEmailInput});
    const response = await fetch(`/.netlify/functions/GetUserData?email=${emailStringified}`);
    const json = await response.json();
    const correctColour = json.records[0].fields.colour;

    if (hexColourNameMap[currentColour] === correctColour ) {
      setCurrEmailInput(currEmailInput);
      setCurrentColour(currentColour);
      setSubmitted(true);
    }

  };

  const handleForgotPasswordResetSubmit = async e => {
    e.preventDefault();
    const emailStringified = JSON.stringify({email: currEmailInput});
    const response = await fetch(`/.netlify/functions/GetUserData?email=${emailStringified}`);
    const json = await response.json();

      if (currNewPasswordInput.length < 8) {
          return;
      }
      const records = []
      json.records
          .filter(x =>
              delete x.fields.daysAgo &&
              delete x.fields["totalPoints (Activity points x duration)"] &&
              delete x.fields.skillsFrequency &&
              delete x.fields.activityTypePoints &&
              delete x.fields.pointsPerSkill &&
              delete x.createdTime &&
              delete x.fields.activityTypePoints
          )
          .map((i) => {
              i.fields.pass = currNewPasswordInput
              console.log(i)
              records.push(i)
          })
      records.map((x) => {
          console.log("x", x)
      })
      fetch(`/.netlify/functions/UpdateUserData?userData=${JSON.stringify({records})}`)
      setPageState("")

  };

  if (submitted && currEmailInput && currentColour) {
    
    return (
    <ThemeProvider theme={theme}>
        <section className="forgot-password-reset-form">
            <H2>Forgotten Password Reset</H2>
            <SimpleForm onSubmit={handleForgotPasswordResetSubmit}>
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
                value={currNewPasswordInput}
                onChange={e => setCurrNewPasswordInput(e.target.value)}
                />
            </Label>
            <p style={{color: "#787881"}}>Your new password needs to be at least 8 characters long</p>
            <p style={{color: "#787881"}}>Your colour choice remains exactly the same</p>
            <Input style={{marginTop: "50px"}} type="submit" />
            </SimpleForm>
        </section>
    </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <section className="forgot-password-form">
        <H2>Forgotten Password</H2>
        <SimpleForm onSubmit={handleForgotPasswordSubmit}>
          <Label>
            {/* Enter email: <br></br> */}
            <EmailInput
              placeholder="Enter school email"
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
          <p style={{color: "#787881"}}>Select the color remember picking. If you can't do this then let your teacher know.</p>
          <p style={{color: "#787881"}}>Alternatively send us an email to info@appskillme.io from your school email and we'll reset it for you.</p>
          <Input style={{marginTop: "50px"}} type="submit"/>
        </SimpleForm>
      </section>
    </ThemeProvider>
  );
}
