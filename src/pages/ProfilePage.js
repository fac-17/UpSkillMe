import React from "react";
import Activites from "../components/activities/Activities";
import ActivityButton from "../components/add-activity-button/ActivityButton";
import EventForm from "../components/add-event-form/EventForm";
import Badges from "../components/badges/Badges";
import Profile from "../components/profile/Profile";
import activityConverter from "../utils/activityConverter";
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
            res.records.forEach(e => {
              e.fields.skills = skillsConverter(e.fields.skills);
              e.fields.activityType = activityConverter(
                e.fields.activityType[0]
              );
            });
          }
          console.log(res)
          return res;
        })
        .then(res => {
          setData(res.records);
          console.log('reset data', data)
          setDataRefresh(false);
        });
    }
  }, [data]);

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
