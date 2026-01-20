const activityConverter = activityInput => {
  const activityArray = [activityInput];
  let resultArray = [];
  const getKeyByValue = (array, object, value) => {
    return array.find(key => object[key] === value);
  };
  const activity = {
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

  const keyArray = Object.keys(activity);

  if (keyArray.includes(activityArray[0])) {
    resultArray = activityArray.map(e => {
      return activity[e];
    });
  } else {
    resultArray = activityArray.map(e => {
      return getKeyByValue(keyArray, activity, e);
    });
  }
  return resultArray;
};

export default activityConverter;
