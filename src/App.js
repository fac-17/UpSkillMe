import React from "react";
import "./App.css";
import Badges from "./components/badges/Badges";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Badges selectedBadges={[
        "Innovation",
        "Teamwork",
        "Technology"
      ]} />
    </div>
  );
}

export default App;
