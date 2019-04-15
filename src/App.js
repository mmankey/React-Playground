import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Welcome from "./Pages/1Welcome/Welcome";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Route path="/" component={Welcome} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
