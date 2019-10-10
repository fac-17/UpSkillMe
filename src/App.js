import React from "react";
import "./App.css";
import Badges from "./components/badges/Badges";
import Profile from "./components/profile/Profile";
import Activities from "./components/activities/Activities";
import ActivityButton from "./components/add-activity-button/ActivityButton";
import EventForm from "./components/add-event-form/EventForm";
import activityConverter from "./utils/activityTypeConverter";
import skillsConverter from "./utils/skillsConverter";
import LogInForm from "./components/log-in-form/LogInForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(props) {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState(["Joseph McBloggs"]);
  const [skills, setSkills] = React.useState([]);
  const [activity, setActivity] = React.useState("");
  const [date, setDate] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [link, setLink] = React.useState("");
  const [avatar, setAvatar] = React.useState("assets/avatarAlien.svg");
  const [dataRefresh, setDataRefresh] = React.useState(true);
  const [emailInput, setEmailInput] = React.useState("");

  React.useEffect(() => {
    // fetch("/.netlify/functions/APICall")
    fetch("http://localhost:9000/APICall")
      .then(res => res.json())
      .then(res => {
        setName(res.records.map(e => e.fields.name));
        setSkills(res.records.map(e => e.fields.skills));
        setActivity(res.records.map(e => e.fields.nameOfActivity));
      });
  }, []);

  // React.useEffect(() => {
  //   // fetch("/.netlify/functions/GetUserData")
  //   const userData = JSON.stringify({ email: emailInput });
  //   if (dataRefresh) {
  //     fetch(`http://localhost:9000/GetUserData?email=${userData}`)
  //       .then(res => res.json())
  //       .then(res => {
  //         res.records.forEach(e => {
  //           e.fields.skills = skillsConverter(e.fields.skills);
  //           e.fields.activityType = activityConverter(e.fields.activityType[0]);
  //         });
  //         return res;
  //       })
  //       .then(res => {
  //         setData(res.records);
  //         setDataRefresh(false);
  //       });
  //   }
  // }, [dataRefresh]);

  React.useEffect(() => {
    // fetch("/.netlify/functions/GetUserData")
    console.log("this is email input", emailInput);
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
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Welcome to UpSkillMe</h1>
            <LogInForm emailInput={emailInput} setEmailInput={setEmailInput} />
          </Route>
          <Route path="/profile">
            <Profile avatar={avatar} data={data} />
            <Badges data={data} />
            <Activities activities={data} />
            <ActivityButton />
            <EventForm
              setDataRefresh={setDataRefresh}
              emailInput={emailInput}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
