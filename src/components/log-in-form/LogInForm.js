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

  const handleLogInSubmit = e => {
    e.preventDefault();
    setEmailInput(e.target.value);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Route>
        <Redirect to={{ pathname: "/profile" }} />
      </Route>
    );
  }
  return (
    <form onSubmit={handleLogInSubmit}>
      <label>
        Enter email:
        <input
          type="text"
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
        />
      </label>
    </form>
  );
}
