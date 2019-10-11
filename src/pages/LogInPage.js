import React from "react";
import LogInForm from "../components/log-in-form/LogInForm";

export default function LogInPage({ emailInput, setEmailInput }) {
  return (
    <div>
      <h1>Welcome to UpSkillMe</h1>
      <LogInForm emailInput={emailInput} setEmailInput={setEmailInput} />
    </div>
  );
}
