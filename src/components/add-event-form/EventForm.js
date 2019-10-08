import React from "react";

export default function EventForm() {
  const [activityName, setActivityName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [badgeValues, setBadgeValues] = React.useState([]);
  const badgeOptions = ["Leadership", "Media", "Teamwork", "Creativity"];

  const [activityType, setActivityType] = React.useState("");
  const activityTypeOptions = ["AfterSchool", "Homework"];

  const [duration, setDuration] = React.useState("");
  const durationOptions = ["1 hour", "2 hours", "3 hours", "4 hours"];

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

  return (
    <form>
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

    </form>
  );
}
