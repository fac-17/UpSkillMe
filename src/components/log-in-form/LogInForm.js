import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    <section>
      <h3> Log In</h3>
      <form onSubmit={handleLogInSubmit}>
        <label>
          Enter email:
          <input
            required
            type="email"
            value={currEmailInput}
            onChange={e => setCurrEmailInput(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Login
          <input type="submit" />
        </label>
      </form>
    </section>
  );
}
