import React from "react";

import { Redirect, Route } from "react-router-dom";

import styled from "styled-components";

const H2 = styled.h2` 
text-align: center;
`;

const Input = styled.input`
  border-radius: 0.5rem;
width: 5rem;
height: 2rem;
font-size: 1rem;
text-align: center;
margin: 3rem  0.5rem;
`

const EmailInput = styled.input`
  border: 1px black solid;
`


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
    <section className="login-form">
      <H2> Log In</H2>
      <form onSubmit={handleLogInSubmit}>
        <label>
          Enter email:
          <EmailInput
            required
            type="email"
            value={currEmailInput}
            onChange={e => setCurrEmailInput(e.target.value)}
          />
        </label>
        <label>
          <Input type="submit" />
        </label>
      </form>
    </section>
  );
}
