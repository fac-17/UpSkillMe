import React from "react";

import Activites from "../components/activities/Activities";
import ActivityButton from "../components/add-activity-button/ActivityButton";
import EventForm from "../components/add-event-form/EventForm";
import Badges from "../components/badges/Badges";
import Profile from "../components/profile/Profile";
import activityConverter from "../utils/activityConverter";
import skillsConverter from "../utils/skillsConverter";

export default function ProfilePage({
  avatar,
  setData,
  data,
  dataRefresh,
  setDataRefresh,
  emailInput,
  setEmailInput
}) {
  console.log("this is email input", emailInput);

  React.useEffect(() => {
    // fetch("/.netlify/functions/GetUserData")
    setEmailInput("emaggy@arkacademy.ac.uk");
    const userData = JSON.stringify({ email: emailInput });
    if (emailInput !== "") {
      fetch(`http://localhost:9000/GetUserData?email=${userData}`)
        .then(res => res.json())
        .then(res => {
          if (res.records) {
            res.records.forEach(e => {
              e.fields.skills = skillsConverter(e.fields.skills);
              e.fields.activityType = activityConverter(
                e.fields.activityType[0]
              );
            });
          }
          return res;
        })
        .then(res => {
          setData(res.records);
          setDataRefresh(false);
        });
    }
  }, [dataRefresh, emailInput]);

  return (
    <div>
      <Profile avatar={avatar} data={data} />
      <Badges data={data} />
      <Activites activites={data} />
      <EventForm setDataRefresh={setDataRefresh} emailInput={emailInput} />
      <ActivityButton />
    </div>
  );
}
