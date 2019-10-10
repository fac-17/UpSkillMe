const activityConverter = input => {
  let activityArray = [input];

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

  let keyArray = Object.keys(activity);
  let result = [];

  if (keyArray.includes(activityArray[0])) {
    result = activityArray.map(e => {
      return activity[e];
    });
  } else {
    result = activityArray.map(e => {
      return getKeyByValue(keyArray, activity, e);
    });
  }
  return result;
};

export default activityConverter;
