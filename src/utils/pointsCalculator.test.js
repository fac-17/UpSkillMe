import pointsCalculator from "./pointsCalculator";

const activity = "Mentoring";
const skills = ["Communication", "Leadership"];
const skills2 = ["Communication", "Leadership", "Media"];

test("function returns an object that has the correct number of points", () => {
  const value = pointsCalculator(4, activity, skills);
  expect(value).toStrictEqual({ Communication: 40, Leadership: 40 });
});

test("function returns an object that has points assigned to skills where points is only ever an integer", () => {
  const value = pointsCalculator(4, activity, skills2);
  expect(value).toStrictEqual({ Communication: 27, Leadership: 27, Media: 27 });
});

test("function returns an object", () => {
  const value = pointsCalculator(4, activity, skills);
  expect(typeof value).toBe("object");
});

//Removed due to changing to object not integer
// test("Check that number is returned", () => {
//   let value = pointsCalculator();
//   expect(typeof value).toBe("number");
// });

// test("check that time in hours is added to points (1 hours = 1 point)", () => {
//   let value = pointsCalculator(4, null);
//   expect(value).toEqual(4);
// });

// test("check the type of activity is added to the points", () => {
//   let value = pointsCalculator(4, activity);
//   expect(value).toEqual(80);
// });

// test("divide total points between the number of skills given", () => {
//   let value = pointsCalculator(4, activity, skills);
//   expect(value).toEqual(40);
// });

// test("function returns an object that contains keys equal to the input skills", () => {
//   let value = pointsCalculator(4, activity, skills);
//   expect(value).toStrictEqual({ Communication: 0, Leadership: 0 });
// });

