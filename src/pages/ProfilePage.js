import React from "react";
import Activites from "../components/activities/Activities";
import ActivityButton from "../components/add-activity-button/ActivityButton";
import EventForm from "../components/add-event-form/EventForm";
import Badges from "../components/badges/Badges";
import Profile from "../components/profile/Profile";
import activityConverter from "../utils/activityConverter";
import skillsConverter from "../utils/skillsConverter";
import LogOutButton from "../components/log-out-button/log-out-button"
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";


export default function ProfilePage({
  setData,
  data,
  emailInput,
  setEmailInput
}) {
  console.log("this is email input", emailInput);
  const [dataRefresh, setDataRefresh] = React.useState(true);
  const [loggedOut, setLoggedOut] = React.useState(false)

  // Fetches the user data, convert the codes, set the Data, 
  // update data refresh.
  // This should happen when the page loads and every time an activity 
  // is added

  React.useEffect(() => {
    console.log('loading the data on the page');
    // fetch("/.netlify/functions/GetUserData")
    const userData = JSON.stringify({ email: emailInput });
    if (emailInput !== "") {
      fetch(`http://localhost:9000/GetUserData?email=${userData}`)
        .then(res =>
          res.json())
        .then(res => {
          console.log('json res', res);
          if (res.records) {
            console.log('res records', res)
            let notAddedStarterActivity = true;
            const filteredRecords = [];

            res.records.forEach(activity => {
              if (activity.fields.nameOfActivity !== 'My first activity' || notAddedStarterActivity) {
                filteredRecords.push(activity);
                if (activity.fields.nameOfActivity === 'My first activity') {
                  notAddedStarterActivity = false;
                }
              }
            })

            filteredRecords.forEach(e => {
              e.fields.skills = skillsConverter(e.fields.skills);
              e.fields.activityType = activityConverter(
                e.fields.activityType[0]
              );
            });
            return filteredRecords;
          }
          console.log(res)
        })
        .then(filteredRecords => {
          setData(filteredRecords);
          console.log('reset data', data)
          setDataRefresh(false);
        });
    }
  }, [dataRefresh]);

  if (loggedOut) {
    console.log('logged out is', loggedOut)
    return (
      <Route>
        <Redirect to={{ pathname: "/" }} />
      </Route>
    );
  }

  return (
    <div>
      <LogOutButton setLoggedOut={setLoggedOut} setEmailInput={setEmailInput} />
      <Profile data={data} />
      <Badges data={data} />
      <Activites activities={data} />
      <EventForm setDataRefresh={setDataRefresh} emailInput={emailInput} />
      <ActivityButton />
    </div>
  );
}
