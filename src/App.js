import React from "react";
import MenuExampleBasic from '../src/Components/AppHeader'
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OneRmHome from "./Pages/1RMHomePage";
import OneRmCalculator from "./Pages/1RMCalculatorPage";
import OneRmLeaderboard from "./Pages/1RMLeaderboardPage";


//components


function App() {
  return (
    <Router>
      <MenuExampleBasic/>
      <div>
      <Switch>
        <Route path="/" exact component={OneRmHome}/>
        <Route path="/calculator" exact component={OneRmCalculator}/>
        <Route path="/leaderboard" exact component={OneRmLeaderboard}/>
      </Switch>
      </div>
  </Router>  
  );
}

export default App;
