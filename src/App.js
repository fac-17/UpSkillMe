import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = React.useState([]);
  const [emailInput, setEmailInput] = React.useState("");
  const [opportunities, setOpportunities] = React.useState([]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage
              emailInput={emailInput}
              setEmailInput={setEmailInput}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage
              data={data}
              setData={setData}
              setEmailInput={setEmailInput}
              emailInput={emailInput}
            />
          </Route>
          <Route path="/opportunities">
            <OpportunitiesPage
              opportunities={opportunities}
              setOpportunities={setOpportunities}
              setEmailInput={setEmailInput}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
