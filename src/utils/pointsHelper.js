const pointsCalculator = (time, activityType, skills) => {
  let pointsObj = {};
  let points = 0;

  const activtyObj = {
    "After School Club": 20,
    "Careers Workshop": 20,
    Competition: 20,
    "Employer Event": 20,
    Mentoring: 20,
    "Online Course": 50,
    "School Project": 20,
    "Skills Workshop": 20,
    "Summer School": 20,
    "University Event": 20,
    Volunteering: 50,
    "Work Experience": 50,
    "Sports club": 20,
    Other: 20
  };

  points += (time * activtyObj[activityType]) / skills.length;

  skills.forEach(element => {
    pointsObj[element] = Math.round(points);
  });

  return pointsObj;
};

export default pointsCalculator;
