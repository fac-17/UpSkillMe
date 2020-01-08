import React, {useEffect, useState} from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import FourZeroFour from "./pages/FourZeroFour";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReactGA from 'react-ga';


function App() {

  useEffect(() => {
    ReactGA.initialize('UA-150602061-1', {debug: process.env.NODE_ENV === 'development'});
    setTrackerInitialised(true);
  }, []);

  const [data, setData] = React.useState([]);
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [colour, setColour] = React.useState("");
  const [opportunities, setOpportunities] = React.useState([]);
  const [trackerInitialised, setTrackerInitialised] = useState(false);

  if (!trackerInitialised) {
    return <></>
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage
              emailInput={emailInput}
              setEmailInput={setEmailInput}
              colour={colour}
              setColour={setColour}
              passwordInput={passwordInput}
              setPasswordInput={setPasswordInput}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage
              data={data}
              setData={setData}
              setEmailInput={setEmailInput}
              emailInput={emailInput}
              colour={colour}
              setColour={setColour}
              passwordInput={passwordInput}
              setPasswordInput={setPasswordInput}
            />
          </Route>
          <Route path="/opportunities">
            <OpportunitiesPage
              opportunities={opportunities}
              setOpportunities={setOpportunities}
              setEmailInput={setEmailInput}
              colour={colour}
              setColour={setColour}
              passwordInput={passwordInput}
              setPasswordInput={setPasswordInput}
            />
          </Route>
          <Route path="*" component={FourZeroFour}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
