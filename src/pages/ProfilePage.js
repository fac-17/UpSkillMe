import React from "react";
import Activites from "../components/activities/Activities";
import ActivityButton from "../components/add-activity-button/ActivityButton";
import EventForm from "../components/add-event-form/EventForm";
import Badges from "../components/badges/Badges";
import Profile from "../components/profile/Profile";
import activityConverter from "../utils/activityTypeConverter";
import skillsConverter from "../utils/skillsConverter";

export default function ProfilePage({
  setData,
  data,
  emailInput,
  setEmailInput
}) {
  console.log("this is email input", emailInput);
  const [dataRefresh, setDataRefresh] = React.useState(true);

  // Fetches the user data, convert the codes, set the Data, 
  // update data refresh.
  // This should happen when the page loads and every time an activity 
  // is added

  React.useEffect(() => {
    // fetch("/.netlify/functions/GetUserData")
    setEmailInput("jane.bloggs@arkacademy.ac.uk");
    const userData = JSON.stringify({ email: emailInput });
    console.log(userData);
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
  }, [dataRefresh]);

  return (
    <div>
      <Profile data={data} />
      <Badges data={data} />
      <Activites activites={data} />
      <EventForm setDataRefresh={setDataRefresh} emailInput={emailInput} />
      <ActivityButton />
    </div>
  );
}
