import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./Pages/1Welcome/Welcome";
import Navbar from "./Components/Navbar/Navbar";
import Disco from "./Pages/2Disco/Disco";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/Disco" component={Disco} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
