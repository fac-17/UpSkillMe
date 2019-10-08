const pointsCalculator = (time, activityType, skills) => {
  let pointsObj = {};
  let points = 0;

  const activtyObj = {
    "After school club": 20,
    "Careers workshop": 20,
    Competition: 20,
    "Employer event": 20,
    Mentoring: 20,
    "Online course": 50,
    "School project": 20,
    "Skills workshop": 20,
    "Summer school": 20,
    "University event": 20,
    Volunteering: 50,
    "Work experience": 50,
    "Sports club": 20,
    Other: 20
  };

  points += (time * activtyObj[activityType]) / skills.length;


  skills.forEach(skill => {
    pointsObj[skill] = Math.round(points);
  });

  return pointsObj;
};

export default pointsCalculator;
