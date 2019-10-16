import React from "react";
import OpportunitiesList from "../components/opportunitiesList/OpportunitiesList";
import { Redirect, Route } from "react-router-dom";
import LogOutButton from "../components/log-out-button/log-out-button";
import activityConverter from "../utils/activityConverter";

export default function OpportunitiesPage({
  opportunities,
  setOpportunities,
  setEmailInput
}) {
  const [loggedOut, setLoggedOut] = React.useState(false);

  React.useEffect(() => {
    fetch(`/.netlify/src/functions/GetOpportunitiesData`)
      .then(res => res.json())
      .then(res => {
        if (res.records) {
          res.records.forEach(e => {
            e.fields.activityType = activityConverter(e.fields.activityType[0]);
          });
          setOpportunities(res.records);
        }
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
      <LogOutButton setLoggedOut={setLoggedOut} setEmailInput={setEmailInput} />
      <OpportunitiesList opportunities={opportunities} />
    </div>
  );
}
