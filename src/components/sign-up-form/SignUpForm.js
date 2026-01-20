import React from "react";
import { Redirect, Route } from "react-router-dom";
import { H2, Input, EmailInput, SimpleForm } from "./SignUpFormStyle";
import { ThemeProvider } from "styled-components";
import { Label } from "../common/common";
import theme from "../../theme";

export default function SignUpForm({ emailInput, setEmailInput }) {
  const [currSubmittedEmail, setCurrSubmittedEmail] = React.useState("");
  const [newUser, setNewUser] = React.useState(false);

  const handleSignUpSubmit = e => {
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
              nameOfActivity: "is this thing on",
              activityType: ["recNbuvP8WP7bHjod"],
              // // fix this - not sure why it's a month behind!
              date: `${(today.getMonth() + 1) %
                12}-${today.getDate()}-${today.getFullYear()}`,
              durationHours: 0,
              link: "",
              schoolEmail: emailInput,
              skills: ["recDSomsyfHDUjRPn"]
            }
          }
        ]
      });
      fetch(
        `/.netlify/functions/CreateUserActivity?activityData=${submittedData}`
        // `http://localhost:9000/CreateUserActivity?activityData=${submittedData}`
      )
        .then(console.log(submittedData))
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
        <Redirect to={{ pathname: "/profile" }} />
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

          <Input type="submit" />
        </SimpleForm>
      </section>
    </ThemeProvider>
  );
}
