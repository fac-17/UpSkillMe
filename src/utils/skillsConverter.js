const skillsConverter = idArrayInput => {
  const getKeyByValue = (array, object, value) => {
    return array.find(key => object[key] === value);
  };
  let resultArray = [];

  const skills = {
    Communication: "recDSomsyfHDUjRPn",
    Creativity: "recU3oEv9LcHVn9qF",
    Innovation: "recsbLT3d78Y4rXTg",
    Leadership: "recbl3IVKZt3N5fu1",
    Media: "recuqTKFbtI9qw63i",
    "Problem-solving": "recqbzqGwaCg0FSb6",
    Teamwork: "recvpbAwyYAeMz6DU",
    Technology: "recx5DLWSk0oqb0uC"
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
