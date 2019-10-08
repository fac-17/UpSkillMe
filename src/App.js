import React from "react";
import "./App.css";
import Badges from "./components/badges/Badges";
import Profile from "./components/profile/Profile";
import Activities from "./components/activities/Activities";
import ActivityButton from "./components/add-activity-button/ActivityButton";
import EventForm from "./components/add-event-form/EventForm";
import pointsCalculator from "./utils/pointsCalculator";

const exampleActivities = [
  {
    name: "Football session",
    date: "May 1st",
    duration: "3 hours",
    badges: ["Leadership", "Teamwork"],
    activityScore: 3,
    link: "www.google.com"
  },
  {
    name: "Maths session",
    date: "April 1st",
    duration: "6 hours",
    badges: ["Media", "Problem-solving", "Leadership"],
    activityScore: 6,
    link: "www.facebook.com"
  }
];

function App(props) {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState(["Joseph McBloggs"]);
  const [skills, setSkills] = React.useState([]);
  const [activity, setActivity] = React.useState("");

  const [date, setDate] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [link, setLink] = React.useState("");
  const [avatar, setAvatar] = React.useState("assets/avatarAlien.svg");
  const [totalScore, setTotalScore] = React.useState(10);

  React.useEffect(() => {
    // fetch("/.netlify/functions/APICall")
    fetch("http://localhost:9000/APICall")
      .then(res => res.json())
      .then(res => {
        setData(res.records);
        setName(res.records.map(e => e.fields.name));
        setSkills(res.records.map(e => e.fields.skills));
        setActivity(res.records.map(e => e.fields.nameOfActivity));
      });
  }, []);

  React.useEffect(() => {
    // fetch("/.netlify/functions/GetUserData")
    fetch("http://localhost:9000/GetUserData")
      .then(res => res.json())
      .then(res => {
        const pointsArray = [];
        res.records.forEach(e => {
          pointsArray.push(
            pointsCalculator(
              e.fields.durationHours,
              e.fields.activityType[0],
              e.fields.skills
            )
          );
          console.log(pointsArray);
        });
      });
  }, []);

  return (
    <div className="App">
      <h1>
        {name} {skills} {activity}
      </h1>
      <Badges selectedBadges={["Innovation", "Teamwork", "Technology"]} />

      <Profile name={name} avatar={avatar} totalScore={totalScore} />
      <Badges />
      <Activities activities={exampleActivities} />
      <ActivityButton />
      <EventForm />
    </div>
  );
}

export default App;
