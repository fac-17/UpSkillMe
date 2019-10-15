import React from "react";
import OpportunitiesList from "../components/opportunitiesList";
import { Redirect, Route } from "react-router-dom";
import LogOutButton from "../components/log-out-button/log-out-button";

export default function OpportunitiesPage({ opportunities }) {
  const [loggedOut, setLoggedOut] = React.useState(false);

  if (loggedOut) {
    return (
      <Route>
        <Redirect to={{ pathname: "/" }} />
      </Route>
    );
  }

  return (
    <div>
      <LogOutButton setLoggedOut={setLoggedOut} />
      <OpportunitiesList>{opportunities}</OpportunitiesList>
    </div>
  );
}
