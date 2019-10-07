import React from "react";
import "./App.css";
import "./functions/APICall";

function App(props) {
  const [data, setData] = React.useState([]);
  const [names, setNames] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  const [activity, setActivity] = React.useState("");
  const [date, setDate] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [link, setLink] = React.useState("");
  React.useEffect(() => {
    fetch("/.netlify/functions/APICall")
      .then(res => res.json())
      .then(res => {
        setData(res.records);
        setNames(res.records.map(e => e.fields.name));
        setSkills(res.records.map(e => e.fields.skills));
        setActivity(res.records.map(e => e.fields.nameOfActivity));
      });
  }, []);

  return (
    <div className="App">
      <h1>
        {names} {skills} {activity}
      </h1>
    </div>
  );
}

export default App;
