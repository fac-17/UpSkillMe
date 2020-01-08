import React from "react";
import Activites from "../components/activities/Activities";
import ActivityButton from "../components/add-activity-button/ActivityButton";
import EventForm from "../components/add-event-form/EventForm";
import Badges from "../components/badges/Badges";
import Profile from "../components/profile/Profile";
import activityConverter from "../utils/activityConverter";
import skillsConverter from "../utils/skillsConverter";
import LogOutButton from "../components/log-out-button/log-out-button";
import OpportunitiesButton from "../components/opportunities-button/OpportunitiesButton";
import { Redirect, Route } from "react-router-dom";
import { Navbar } from "../components/common/common";
import {useTracker} from "../utils/customHooks";
export default function ProfilePage({
  setData,
  data,
  emailInput,
  setEmailInput,
  colour,
  setColour,
  passwordInput,
  setPasswordInput
}) {
  setEmailInput(window.sessionStorage.getItem("emailInput", emailInput));
  setPasswordInput(window.sessionStorage.getItem("passwordInput", passwordInput));
  setColour(window.sessionStorage.getItem("colour", colour));

  const [dataRefresh, setDataRefresh] = React.useState(true);
  const [loggedOut, setLoggedOut] = React.useState(false);
  const [isFormDisplayed, setFormDisplayed] = React.useState("none");
  const [activityButtonDisplay, setActivityButtonDisplay] = React.useState(
    "block"
  );
  const [closeButtonDisplay, setCloseButtonDisplay] = React.useState(
    "inline-block"
  );

  useTracker('/profile');

  // Fetches the user data, convert the codes, set the Data,
  // update data refresh.
  // This should happen when the page loads and every time an activity
  // is added

  React.useEffect(() => {
    if (!window.sessionStorage.getItem("emailInput")) {
      window.sessionStorage.setItem("emailInput", emailInput);
    }
    if (!window.sessionStorage.getItem("passwordInput")) {
      window.sessionStorage.setItem("passwordInput", passwordInput);
    }
    if (!window.sessionStorage.getItem("colour")) {
      window.sessionStorage.setItem("colour", colour);
    }

    const userData = JSON.stringify({
      email: window.sessionStorage.getItem("emailInput")
    });
    if (emailInput !== "") {
      fetch(`/.netlify/functions/GetUserData?email=${userData}`)
        // fetch(`http://localhost:9000/GetUserData?email=${userData}`)
        .then(res => res.json())
        .then(res => {
          if (res.records) {
            let notAddedStarterActivity = true;
            const filteredRecords = [];

            res.records.forEach(activity => {
              if (
                activity.fields.nameOfActivity !== "My first activity" ||
                notAddedStarterActivity
              ) {
                filteredRecords.push(activity);
                if (activity.fields.nameOfActivity === "My first activity") {
                  notAddedStarterActivity = false;
                }
              }
            });

            filteredRecords.forEach(e => {
              e.fields.skills = skillsConverter(e.fields.skills);
              e.fields.activityType = activityConverter(
                e.fields.activityType[0]
              );
            });

            filteredRecords.sort((a, b) => {
              const dateA = new Date(a.fields.date);
              const dateB = new Date(b.fields.date);
              return dateB - dateA;
            })

            return filteredRecords;
          }
        })
        .then(filteredRecords => {
          setData(filteredRecords);
          setDataRefresh(false);
        });
    }
  }, [dataRefresh, emailInput]);

  if (loggedOut) {
    return (
      <Route>
        <Redirect to={{ pathname: "/" }} />
      </Route>
    );
  }

  return (
    <div>
      <Navbar>
        <LogOutButton
          setLoggedOut={setLoggedOut}
          setEmailInput={setEmailInput}
          setColour={setColour}
          setPasswordInput={setPasswordInput}
        />
        <OpportunitiesButton />
      </Navbar>
      <Profile
        data={data}
        emailInput={emailInput}
        setLoggedOut={setLoggedOut}
        setEmailInput={setEmailInput}
        colour={colour}
        setColour={setColour}
      />

      <Badges data={data} />
      <Activites activities={data} />
      <EventForm
        setDataRefresh={setDataRefresh}
        emailInput={emailInput}
        colour={colour}
        isFormDisplayed={isFormDisplayed}
        setFormDisplayed={setFormDisplayed}
        activityButtonDisplay={activityButtonDisplay}
        setActivityButtonDisplay={setActivityButtonDisplay}
        closeButtonDisplay={closeButtonDisplay}
        setCloseButtonDisplay={setCloseButtonDisplay}
        passwordInput={passwordInput}
      />
      <ActivityButton
        isFormDisplayed={isFormDisplayed}
        setFormDisplayed={setFormDisplayed}
        activityButtonDisplay={activityButtonDisplay}
        setActivityButtonDisplay={setActivityButtonDisplay}
        closeButtonDisplay={closeButtonDisplay}
        setCloseButtonDisplay={setCloseButtonDisplay}
      />
    </div>
  );
}
