const activityConverter = activityInput => {
  const activityArray = [activityInput];
  let resultArray = [];
  const getKeyByValue = (array, object, value) => {
    return array.find(key => object[key] === value);
  };
  const activity = {
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
