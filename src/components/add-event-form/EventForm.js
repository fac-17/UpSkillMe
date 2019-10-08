import React from "react";

export default function EventForm() {
  const [activityName, setActivityName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [badgeValues, setBadgeValues] = React.useState([]);
  const badgeOptions = ["Communication", "Creativity", "Innovation", "Leadership", "Media", "Problem Solving", "Teamwork", "Technology"];

  const [activityType, setActivityType] = React.useState("");
  const activityTypeOptions = ["After School Club",
  "Careers Workshop",
  "Competition ",
  "Employer Event",
  "Mentoring",
  "Online Course ",
  "School Project ",
  "Skills Workshop",
  "Sports Club",
  "Summer School ",
  "University Event ",
  "Volunteering ",
  "Work Experience ",
  "Other"];

  const [duration, setDuration] = React.useState("");
  const durationOptions = ["1 hour",
  "2 hours",
  "3 hours ",
  "4 hours",
  "5 hours",
  "1 day (7 hours)",
  "2 days ",
  "3 days ",
  "4 days ",
  "1 week ",
  "2 weeks ",
  "3 weeks ",
  "4 weeks"];

  const [supportingLink, setSupportingLink] = React.useState("");

  const updateBadges = e => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setBadgeValues(value);
  };
  const updateActivityType = e => {
    setActivityType(e.target.value);
  };

  const updateDuration = e => {
    setDuration(e.target.value);
  };

  const handleSubmit = e => {
      alert('This form was submitted')
      e.preventDefault();
    }

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
          value={activityType}
          onChange={updateActivityType}
        >
          {activityTypeOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </select>
      </label>
      
      <label>
        Duration:
        <select
          name="duration"
          value={duration}
          onChange={updateDuration}
        >
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
          {badgeOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
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
      <input type ="submit" value="Submit" />
    </form>
  );
}
