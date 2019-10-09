const skillsConverter = idArray => {
  const getKeyByValue = (array, object, value) => {
    return array.find(key => object[key] === value);
  };
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
  let keyArray = Object.keys(skills);
  let valueArray = Object.values(skills);
  let result = [];

  if (keyArray.includes(idArray[0])) {
    result = idArray.map(e => {
      return skills[e];
    });
  } else {
    result = idArray.map(e => {
      return getKeyByValue(keyArray, skills, e);
    });
  }
  return result;
};

export default skillsConverter;
