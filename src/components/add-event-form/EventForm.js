import React from "react";
import skillsConverter from "../../utils/skillsConverter";
import activityConverter from "../../utils/activityConverter";
import styled from "styled-components";
import ActivityButton from "../add-activity-button/ActivityButton";
import CloseButton from "../close-button/CloseButton";

//Styled components
const FormStyle = styled.form`
  display: ${props => props.formDisplay};
  max-width: 90%;
  margin: 10px;
  position: relative;
  background: #ffffff;
  margin: 0 auto 1%;
  padding: 3%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 2.5%;
`;

const Input = styled.input`
  display: block;
  width: 90%;

  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 2.5%;
  padding: 1.5%;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

// font-family: "Nunito", sans-serif;

const Select = styled.select`
  display: block;
  width: 95%;
`;

const Submit = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  background-color: rgb(16, 156, 241);
  color: white;
  border-radius: 5px;
  height: 50px;
  width: 140px;
  text-align: center;
  text-decoration: none;
  padding: 1%;
  border-radius: 5px;
  display: block;
  transition: all 0.4s ease 0s;
  cursor: pointer;

  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);

  :hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export default function EventForm({
  setDataRefresh,
  emailInput,
  isFormDisplayed,
  setFormDisplayed,
  activityButtonDisplay,
  setActivityButtonDisplay,
  closeButtonDisplay,
  setCloseButtonDisplay
}) {
  const [activityName, setActivityName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [badgeValues, setBadgeValues] = React.useState([]);
  const [formDisplay, setFormDisplay] = React.useState(isFormDisplayed);

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
  const [activityType, setActivityType] = React.useState(["recbZLGHiKTHX9ZJ7"]);
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
    "After school club": "recNbuvP8WP7bHjod",
    "Careers workshop": "recJ3078QIlKbcGdK",
    Competition: "reczI4PtKTRCPhqL0",
    "Employer event": "recqOngzJxgz7Ur17",
    Mentoring: "reckvRsfNcVM9evi6",
    "Online course": "recM5xG4jcpBibEGx",
    "School project": "recmCPdh5DvsNXBXa",
    "Skills workshop": "recydjSRey1ama1St",
    "Summer school": "recmsDZVC2o2vQ2j4",
    "University event": "recJsNHEqqYzOqcDP",
    Volunteering: "rec7JYd2Mp8w3WFMf",
    "Work experience": "rechxtBap6W2peMPM",
    "Sports club": "recwWwrx6ftHThA9v",
    Other: "recbZLGHiKTHX9ZJ7"
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
      `/.netlify/functions/CreateUserActivity?activityData=${submittedData}`
      // `http://localhost:9000/CreateUserActivity?activityData=${submittedData}`
    )
      .then(res => res.json())
      .then(res => {
        setDataRefresh(true);
      });

    alert("This form was submitted");
    e.preventDefault();
  };

  React.useEffect(() => {
    setFormDisplay(isFormDisplayed);
  }, [isFormDisplayed]);

  return (
    <FormStyle formDisplay={formDisplay} onSubmit={handleSubmit}>
      <CloseButton
        closeButtonDisplay={closeButtonDisplay}
        setCloseButtonDisplay={setCloseButtonDisplay}
        setFormDisplayed={setFormDisplayed}
        isFormDisplayed={isFormDisplayed}
        activityButtonDisplay={activityButtonDisplay}
        setActivityButtonDisplay={setActivityButtonDisplay}
      />
      <h2> Add new activity</h2>
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
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </Select>
      </Label>

      <Label>
        Duration (Hours):
        <Select
          required
          name="duration"
          value={duration}
          onChange={updateDuration}
        >
          {durationOptions.map(opt => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </Select>
      </Label>

      <Label>
        Select Skills (Max 3)
        <Select
          required
          name="badgeValues"
          multiple={true}
          value={badgeValues}
          onChange={updateBadges}
        >
          {badgeOptions.map(opt => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
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
