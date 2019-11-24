import React from "react";
import {Redirect, Route} from "react-router-dom";
import {H2, Input, EmailInput, SimpleForm} from "./SignUpFormStyle";
import {ThemeProvider} from "styled-components";
import {Label} from "../common/common";
import theme from "../../theme";
import {CirclePicker} from "react-color";

const hexColourNameMap = {
  '#37d67a': 'Green', '#2ccce4': 'Blue', '#555555': 'Black', '#dce775': 'Yellow', '#ff8a65': 'Orange', '#ba68c8': 'Pink'
}

export default function SignUpForm({emailInput, setEmailInput, colour, setColour}) {
  const [currSubmittedEmail, setCurrSubmittedEmail] = React.useState("");
  const [currentColour, setCurrentColour] = React.useState('#37d67a');
  const [newUser, setNewUser] = React.useState(false);

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    setNewUser(true);
    setEmailInput(currSubmittedEmail);
  };

  React.useEffect(() => {
    if (emailInput && newUser) {
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
              skills: ["rec1aXpu34QFpVnDc"]
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
  }, [emailInput, newUser]);

  if (emailInput) {
    return (
      <Route>
        <Redirect to={{pathname: "/profile"}}/>
      </Route>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <section>
        <H2> Sign Up</H2>
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
