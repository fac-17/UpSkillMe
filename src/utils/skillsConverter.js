const skillsConverter = idArrayInput => {
  const getKeyByValue = (array, object, value) => {
    return array.find(key => object[key] === value);
  };
  let resultArray = [];

  const skills = {
    Communication: "rec1aXpu34QFpVnDc",
    Creativity: "recilXHxEAlJqZFeu",
    Innovation: "recQtkW5IWh0z3tH5",
    Leadership: "reczDCLXfOC5iHLiQ",
    Media: "recSIsNHGiRbV8CR7",
    "Problem-solving": "recOt8tI1ZLivhoZV",
    Teamwork: "recTHKDy3NJghbCrJ",
    Technology: "recVncOYn99qVNwir"
  };
  const keyArray = Object.keys(skills);

  if (keyArray.includes(idArrayInput[0])) {
    resultArray = idArrayInput.map(e => {
      return skills[e];
    });
  } else {
    resultArray = idArrayInput.map(e => {
      return getKeyByValue(keyArray, skills, e);
    });
  }
  return resultArray;
};

export default skillsConverter;
