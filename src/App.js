import React from "react";
import "./App.css";
import Badges from "./components/badges/Badges";
import pointsCalculator from "./utils/pointsHelper";

function App(props) {
  const [data, setData] = React.useState([]);
  const [names, setNames] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  const [activity, setActivity] = React.useState("");
  const [date, setDate] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [link, setLink] = React.useState("");
  React.useEffect(() => {
    // fetch("/.netlify/functions/APICall")
    fetch("http://localhost:9000/APICall")
      .then(res => res.json())
      .then(res => {
        setData(res.records);
        setNames(res.records.map(e => e.fields.name));
        setSkills(res.records.map(e => e.fields.skills));
        setActivity(res.records.map(e => e.fields.nameOfActivity));
      });
  }, []);

  React.useEffect(() => {
    // fetch("/.netlify/functions/GetUserData")
    fetch("http://localhost:9000/GetUserData")
      .then(res => res.json())
      .then(res => {
        // console.log(res);
      });
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:9000/CreateUserActivity")
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }, []);

  return (
    <div className="App">
      <h1>
        {names} {skills} {activity}
      </h1>
      <Badges selectedBadges={["Innovation", "Teamwork", "Technology"]} />
    </div>
  );
}

export default App;
