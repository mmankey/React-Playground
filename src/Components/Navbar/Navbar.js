import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-3">
            {/* <a href="#" className="brand-logo">
              Logo
            </a> */}

            <i className="material-icons">menu</i>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>{/* <a href="sass.html">Sass</a> */}</li>
              <li>{/* <a href="badges.html">Components</a> */}</li>
              <li>{/* <a href="collapsible.html">JavaScript</a> */}</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
