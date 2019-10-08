import React from "react";
import "./App.css";
import Badges from "./components/badges/Badges";
import Profile from "./components/profile/Profile";
import Activities from "./components/activities/Activities"
import ActivityButton from './components/add-activity-button/ActivityButton';
import EventForm from './components/add-event-form/EventForm';

const exampleActivities = [{
  name: 'Football session',
  date: 'May 1st',
  duration: '3 hours',
  badges: ['Leadership', 'Teamwork'],
  activityScore: 3,
  link: 'www.google.com'
}, {
  name: 'Maths session',
  date: 'April 1st',
  duration: '6 hours',
  badges: ['Media', 'Problem-solving', 'Leadership'],
  activityScore: 6,
  link: 'www.facebook.com'
}]

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
    fetch("/.netlify/functions/APICall")
      .then(res => res.json())
      .then(res => {
        setData(res.records);
        setName(res.records.map(e => e.fields.name));
        setSkills(res.records.map(e => e.fields.skills));
        setActivity(res.records.map(e => e.fields.nameOfActivity));
      });
  }, []);

  return (
    <div className="App">
      < Profile name={name} avatar={avatar} totalScore={totalScore} />
      < Badges />
      < Activities activities={exampleActivities} />
      < ActivityButton />
      < EventForm />
    </div>
  );
}

export default App;
