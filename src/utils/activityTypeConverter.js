const skillsConverter = idArray => {
    const getKeyByValue = (array, object, value) => {
      return array.find(key => object[key] === value);
    };
    const skills = {
        "After School Club" : "recbt3yRDLY9GjPc2",
        "Careers Workshop" : "rec7lzaalxuMGOc1z",
        "Competition" : "recX0DSvfI0EkTWzP",
        "Employer Event" : "recO6WjBempBCwXPW",
        "Mentoring" : "recINqvhi14OEQ16V",
        "Online Course" : "recan6J6O1yDNNaum",
        "School Project" : "recKUogjAsEuiz7LZ",
        "Skills Workshop" : "recWvSVTJnacRMxGi",
        "Summer School" : "recKKc2X7Rx40sy7T",
        "University Event" : "rec7KmKGVf7Bj2IrE",
        "Volunteering" : "recv1xg4hehyyybA4",
        "Work Experience" : "recFP2EcUV54UQiDB",
        "Sports Club" : "recUe5uzB4CJoT6Xk",
        "Other" : "reczhkJJNz2JsLvxW"
        
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