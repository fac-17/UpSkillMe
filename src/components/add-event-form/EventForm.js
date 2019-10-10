import React from "react";
import skillsConverter from "../../utils/skillsConverter";
import activityConverter from "../../utils/activityTypeConverter";

export default function EventForm() {
  const [activityName, setActivityName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [badgeValues, setBadgeValues] = React.useState([]);
  const badgeOptions = [
    "Communication",
    "Creativity",
    "Innovation",
    "Leadership",
    "Media",
    "Problem solving",
    "Teamwork",
    "Technology"
  ];

  // const emptyBadgeOptions = React.useState(badgeOptions);
  // if(badgeOptions !== null && badgeOptions.length === 3) {

  // }

  const [activityType, setActivityType] = React.useState("");
  const activityTypeOptions = [
    "After school club",
    "Careers workshop",
    "Competition",
    "Employer event",
    "Mentoring",
    "Online course",
    "School project",
    "Skills workshop",
    "Sports club",
    "Summer school",
    "University event",
    "Volunteering",
    "Work experience",
    "Other"
  ];

  const activityDictionary = {
    "After school club": "recbt3yRDLY9GjPc2",
    "Careers workshop": "rec7lzaalxuMGOc1z",
    Competition: "recX0DSvfI0EkTWzP",
    "Employer event": "recO6WjBempBCwXPW",
    Mentoring: "recINqvhi14OEQ16V",
    "Online course": "recan6J6O1yDNNaum",
    "School project": "recKUogjAsEuiz7LZ",
    "Skills workshop": "recWvSVTJnacRMxGi",
    "Summer school": "recKKc2X7Rx40sy7T",
    "University event": "rec7KmKGVf7Bj2IrE",
    Volunteering: "recv1xg4hehyyybA4",
    "Work experience": "recFP2EcUV54UQiDB",
    "Sports club": "recUe5uzB4CJoT6Xk",
    Other: "reczhkJJNz2JsLvxW"
  };

  const skillsDictionary = {
    Communication: "rec1aXpu34QFpVnDc",
    Creativity: "recilXHxEAlJqZFeu",
    Innovation: "recQtkW5IWh0z3tH5",
    Leadership: "reczDCLXfOC5iHLiQ",
    Media: "recSIsNHGiRbV8CR7",
    "Problem solving": "recOt8tI1ZLivhoZV",
    Teamwork: "recTHKDy3NJghbCrJ",
    Technology: "recVncOYn99qVNwir"
  };

  const [duration, setDuration] = React.useState(0);
  const durationOptions = [1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 70, 105, 140];

  const [supportingLink, setSupportingLink] = React.useState("");

  const updateBadges = e => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
    value = value.slice(-3);
    // let newValue = skillsConverter(value);
    setBadgeValues(value);
  };
  const updateActivityType = e => {
    let convertedActivity = activityConverter(e.target.value);
    setActivityType(convertedActivity);
  };

  const updateDuration = e => {
    setDuration(parseInt(e.target.value));
  };

  const handleSubmit = e => {
    const stringtest = JSON.stringify({
      records: [
        {
          fields: {
            nameOfActivity: activityName,
            activityType: activityType,
            date: date,
            durationHours: duration,
            link: supportingLink,
            skills: skillsConverter(badgeValues),
            schoolEmail: "tbd@gmail.com"
          }
        }
      ]
    });
    fetch(`http://localhost:9000/CreateUserActivity?activityData=${stringtest}`)
      .then(res => res.json())
      .then(res => {
        // console.log(res);
      });

    alert("This form was submitted");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name of Activity:
        <input
          type="text"
          value={activityName}
          onChange={e => setActivityName(e.target.value)}
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>

      <label>
        Activity type:
        <select
          name="activityType"
          value={activityDictionary[activityType]}
          onChange={updateActivityType}
        >
          {activityTypeOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </select>
      </label>

      <label>
        Duration:
        <select name="duration" value={duration} onChange={updateDuration}>
          {durationOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </select>
      </label>

      <label>
        Select Skills
        <select
          name="badgeValues"
          multiple={true}
          value={badgeValues}
          onChange={updateBadges}
        >
          {badgeOptions.map(
            opt => {
              return <option value={opt}>{opt}</option>;
            })
          })

          }
        </select>
      </label>

      <label>
        Link to supporting info:
        <input
          type="url"
          value={supportingLink}
          onChange={e => setSupportingLink(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
