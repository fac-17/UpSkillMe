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
  const [currEmailInput, setCurrEmailInput] = React.useState("")
  const handleLogInSubmit = e => {
    e.preventDefault();
    setEmailInput(currEmailInput);
    setSubmitted(true);
    console.log("this is email input", currEmailInput);
  };

  if (submitted) {
    return (
      <Route>
        <Redirect to={{ pathname: "/profile", emailInput: emailInput }} />
      </Route>
    );
  }

  return (
    <form onSubmit={handleLogInSubmit}>
      <label>
        Enter email:
        <input
          type="text"
          value={currEmailInput}
          onChange={e => setCurrEmailInput(e.target.value)}
        />
      </label>
    </form>
  );
}
