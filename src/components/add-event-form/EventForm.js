import React from "react";
import skillsConverter from "../../utils/skillsConverter";
import activityConverter from "../../utils/activityConverter";
import styled from "styled-components";

//Styled components
const FormStyle = styled.form`
  max-width: 90%;
  margin: 10px;
  `;

  const Label = styled.label`
    display: block;
  `;

  const Input = styled.input`
    display: block;
    width: 90%;
  `;
  
  const Select = styled.select`
    display: block;
    width: 95%;
  `;

  const Submit = styled.input`
    background-color: black;
    color: white;
    border-radius: 20px;
    height: 50px;
    width: 140px;
    text-align: center;
  `;

//

export default function EventForm({ setDataRefresh, emailInput }) {
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

  //Initialising activity type with the an array containing 
  //the id of after school club. Default value is legitimate value.
  const [activityType, setActivityType] = React.useState(["recbt3yRDLY9GjPc2"]);
  const activityOptions = [
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

  const [duration, setDuration] = React.useState(1);
  const durationOptions = [1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 70, 105, 140];
  const [supportingLink, setSupportingLink] = React.useState("");

  const updateBadges = e => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
    value = value.slice(-3);
    setBadgeValues(value);
  };

  const updateActivityType = e => {
    const convertedActivity = activityConverter(e.target.value);
    setActivityType(convertedActivity);
  };

  const updateDuration = e => {
    setDuration(parseInt(e.target.value));
  };

  const handleSubmit = e => {
    const submittedData = JSON.stringify({
      records: [
        {
          fields: {
            nameOfActivity: activityName,
            activityType: activityType,
            date: date,
            durationHours: duration,
            link: supportingLink,
            schoolEmail: emailInput,
            skills: skillsConverter(badgeValues)
          }
        }
      ]
    });
    fetch(
      `http://localhost:9000/CreateUserActivity?activityData=${submittedData}`
    )
      .then(res => res.json())
      .then(res => {
        console.log("came into refresh");
        setDataRefresh(true);
      });

    alert("This form was submitted");
    e.preventDefault();
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Label>
        Name of Activity:
        <Input
          required
          type="text"
          value={activityName}
          onChange={e => setActivityName(e.target.value)}
        />
      </Label>

      <Label>
        Date:
        <Input
          required
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </Label>

      <Label>
        Activity type:
        <Select
          required
          name="activityType"
          value={activityDictionary[activityType]}
          onChange={updateActivityType}
        >
          {activityOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </Select>
      </Label>

      <Label>
        Duration:
        <Select
          required
          name="duration" value={duration} onChange={updateDuration}>
          {durationOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </Select>
      </Label>

      <Label>
        Select Skills
        <Select
          required
          name="badgeValues"
          multiple={true}
          value={badgeValues}
          onChange={updateBadges}
        >
          {badgeOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </Select>
      </Label>

      <Label>
        Link to supporting info:
        <Input
          type="url"
          value={supportingLink}
          onChange={e => setSupportingLink(e.target.value)}
        />
      </Label>
      <Submit type="submit" value="Submit" />
    </FormStyle>
  );
}
