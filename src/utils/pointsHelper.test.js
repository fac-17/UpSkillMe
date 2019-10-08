import React from "react";
import pointsCalculator from "./pointsHelper";
import { tsParenthesizedType } from "@babel/types";

const activity = "Mentoring";
const skills = ["Communication", "Leadership"];

test("Jest is working", () => {
  expect(true).toBeTruthy();
});

test("Check that number is returned", () => {
  let value = pointsCalculator();
  expect(typeof value).toBe("number");
});

test("check that time in hours is added to points (1 hours = 1 point)", () => {
  let value = pointsCalculator(4, null);
  expect(value).toEqual(4);
});

test("check the type of activity is added to the points", () => {
  let value = pointsCalculator(4, activity);
  expect(value).toEqual(80);
});

test("divide total points between the number of skills given", () => {
  let value = pointsCalculator(4, activity, skills);
  expect(value).toEqual(40);
});
