import React from "react";
import {Redirect, Route} from "react-router-dom";
import { H2, Input, EmailInput, SimpleForm, PasswordInput, CheckBox,CheckBoxCollection } from "./SignUpFormStyle";
import {ThemeProvider} from "styled-components";
import {Label} from "../common/common";
import theme from "../../theme";
import {CirclePicker} from "react-color";

const hexColourNameMap = {
  '#37d67a': 'Green', '#2ccce4': 'Blue', '#555555': 'Black', '#dce775': 'Yellow', '#ff8a65': 'Orange', '#ba68c8': 'Pink'
}

export default function SignUpForm({emailInput, setEmailInput, colour, setColour, passwordInput, setPasswordInput}) {

  const [currSubmittedEmail, setCurrSubmittedEmail] = React.useState("");
  const [currSubmittedPassword, setCurrSubmittedPassword] = React.useState("");
  const [currentColour, setCurrentColour] = React.useState('#37d67a');
  const [newUser, setNewUser] = React.useState(true);

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    const emailStringified = JSON.stringify({email: currSubmittedEmail});
    const response = await fetch(`/.netlify/functions/GetUserData?email=${emailStringified}`);
    const json = await response.json();
    console.log(json.records.length)
    console.log(emailInput)
    console.log(colour)

    if (json.records.length === 0 && currSubmittedPassword.length >= 8) {
      setEmailInput(currSubmittedEmail);
      setPasswordInput(currSubmittedPassword);
      setColour(currentColour);
    }

  };

  React.useEffect(() => {
    if (emailInput && colour && newUser && passwordInput) {
      console.log('the colour is')
      const today = new Date();
      const submittedData = JSON.stringify({
        records: [
          {
            fields: {
              nameOfActivity: "My first activity",
              activityType: ["recbt3yRDLY9GjPc2"],
              // fix this - not sure why it's a month behind!
              date: `${(today.getMonth() + 1) %
              12}-${today.getDate()}-${today.getFullYear()}`,
              durationHours: 0,
              link: "",
              schoolEmail: emailInput,
              colour: hexColourNameMap[colour],
              skills: ["rec1aXpu34QFpVnDc"],
              pass: passwordInput
            }
          }
        ]
      });
      fetch(
        `/.netlify/functions/CreateUserActivity?activityData=${submittedData}`
      )
        .then(res => res.json())
        .then(res => {
          setNewUser(false);
        });
    }
    // return () => window.removeEventListener("submit", handleSignUpSubmit);
  }, [emailInput, colour, newUser, passwordInput]);

  if (emailInput && colour && !newUser && passwordInput) {
    return (
      <Route>
        <Redirect to={{pathname: "/profile"}}/>
      </Route>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <section>
        <H2>Sign Up</H2>
        <SimpleForm onSubmit={handleSignUpSubmit}>
          <Label>
            {/* Enter email: <br></br> */}
            <EmailInput
              placeholder="Enter email:"
              required
              type="email"
              value={currSubmittedEmail}
              onChange={e => setCurrSubmittedEmail(e.target.value)}
            />
          </Label>
          <Label style={{marginTop: '1em'}}>
            <PasswordInput
              placeholder="Enter Password"
              required
              type="password"
              value={currSubmittedPassword}
              onChange={e => setCurrSubmittedPassword(e.target.value)}
            />
          </Label>
          <p style={{color: "#787881"}}>Your password needs to be least 8 characters long</p>
          <p>Pick your colour</p>
          <CirclePicker colors={['#37d67a', '#2ccce4', '#555555', '#dce775', '#ff8a65', '#ba68c8']}
                        onChange={(colour) => {
                          console.log(colour.hex)
                          setCurrentColour(colour.hex)
                        }}/>
          <p style={{color: currentColour}}>{hexColourNameMap[currentColour]}</p>
          <p style={{color: "#787881"}}>Pick one of these colors you'll be asked it you ever forgot your password</p>

          <CheckBoxCollection>
            <Label >
              <CheckBox
                  type="checkbox"
              />
              {"Subscribe me to the newsletter for updates on work experience, events, careers advice, courses & more"}
            </Label>
            <Label>
              <br/>
              <CheckBox
                  required
                  type="checkbox"
              />
              {"By submitting this form, I agree to the "}
              <a href="https://upskill-site.s3-eu-west-1.amazonaws.com/Upskill+Global+Limited_Privacy+Policy+.pdf" style={{color: 'black'}}>Upskill Me Terms of Service</a>
              {" and acknowledge that the "}
              <a href="https://upskill-site.s3-eu-west-1.amazonaws.com/Upskill+Global+Limited_Privacy+Policy+.pdf" style={{color: 'black'}}>Privacy Policy</a>
              {" applies to this service. "}
            </Label>
          </CheckBoxCollection>

          <Input style={{marginTop: "50px"}} type="submit"/>
        </SimpleForm>
      </section>
    </ThemeProvider>
  );
}
