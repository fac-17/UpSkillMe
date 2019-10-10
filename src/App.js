import React from "react";
import "./App.css";
import Badges from "./components/badges/Badges";
import Profile from "./components/profile/Profile";
import Activities from "./components/activities/Activities";
import ActivityButton from "./components/add-activity-button/ActivityButton";
import EventForm from "./components/add-event-form/EventForm";
import pointsCalculator from "./utils/pointsCalculator";

const APImockData = {
  records: [
    {
      id: "recAMfgpaVU5nsKfh",
      fields: {
        name: "Joe Bloggs",
        schoolEmail: "joe.bloggs@arkacademy.ac.uk",
        nameOfActivity: "cool thing",
        activityType: ["recbt3yRDLY9GjPc2"],
        date: "2019-10-06",
        durationHours: 7,
        skills: ["recilXHxEAlJqZFeu", "recQtkW5IWh0z3tH5"],
        link: "www.google.com",
        "totalPoints (Activity points x duration)": 140,
        "Skills frequency": 2,
        "Activity Points Lookup": [20],
        "Points per Skill": 70
      },
      createdTime: "2019-10-08T10:55:20.000Z"
    },
    {
      id: "recar3twJVqiKVtBt",
      fields: {
        name: "Joe Bloggs",
        schoolEmail: "joe.bloggs@arkacademy.ac.uk",
        nameOfActivity: "Sick online coding course",
        activityType: ["recbt3yRDLY9GjPc2"],
        date: "2019-10-06",
        durationHours: 4,
        skills: ["recilXHxEAlJqZFeu", "recVncOYn99qVNwir", "recQtkW5IWh0z3tH5"],
        link: "http://www.foodhack.london/",
        "totalPoints (Activity points x duration)": 80,
        "Skills frequency": 3,
        "Activity Points Lookup": [20],
        "Points per Skill": 26.666666666666668
      },
      createdTime: "2019-10-07T09:56:34.000Z"
    }
  ]
};

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

  React.useEffect(() => {
    // fetch("/.netlify/functions/GetUserData")
    fetch("http://localhost:9000/GetUserData")
      .then(res => res.json())
      .then(res => {
        setData(res.records);
        const pointsArray = [];
        res.records.forEach(e => {
          pointsArray.push(
            pointsCalculator(
              e.fields.durationHours,
              e.fields.activityType[0],
              e.fields.skills
            )
          );
          // console.log(pointsArray);
        });
      });
  }, []);

  return (
    <div className="App">
      
      <Profile avatar={avatar} data={data}/>
      <Badges data={data} />
      <Activities activities={exampleActivities} />
      <ActivityButton />
      <EventForm />
    </div>
  );
}

export default App;
