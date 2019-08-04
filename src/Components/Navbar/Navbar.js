import React, { Component } from "react";
import M from "materialize-css";
import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-4 ">
            <ul className="left ">
              <li>
                <a href="\" className="brand-logo margin">
                  <span className="hide-on-small-only">React Playground</span>
                </a>
              </li>
            </ul>
            {/* Dropdown Structure */}
            <ul id="dropdown1" className="dropdown-content grey darken-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Disco">Disco</a>
              </li>
              <li>
                <a href="/FormikDemo">Formik</a>
              </li>
              {/* <li>
                <a href="#!">two</a>
              </li>
              <li class="divider" />
              <li>
                <a href="#!">three</a>
              </li> */}
            </ul>
            <li>
                <a href="/CatHooks">CatHooks</a>
              </li>

            <ul className="right ">
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  Select
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
