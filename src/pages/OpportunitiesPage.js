import React from "react";
import OpportunitiesList from "../components/opportunitiesList/OpportunitiesList";
import { Redirect, Route } from "react-router-dom";
import LogOutButton from "../components/log-out-button/log-out-button";

export default function OpportunitiesPage({ opportunities, setOpportunities }) {
  const [loggedOut, setLoggedOut] = React.useState(false);

  React.useEffect(() => {
    fetch(`http://localhost:9000/GetOpportunitiesData`)
      .then(res => res.json())
      .then(res => {
        setOpportunities(res.records);
      });
  }, []);

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
      <OpportunitiesList opportunities={opportunities} />
    </div>
  );
}
