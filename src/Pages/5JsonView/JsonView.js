// ./Pages/JsonView.js

import React from "react";
import "./JsonView.css";
import M from "materialize-css";

class JsonView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      configData: {
        company: "Big Company",
        data: [
          {
            id: 1,
            type: "accounting",
            stuff: "Good numbers!"
          },
          { id: 2, type: "hr", stuff: "Jim Johnson" },
          {
            id: 3,
            type: "accounting",
            stuff: "Bad numbers!"
          },
          { id: 4, type: "hr", stuff: "Jane Johnson" }
        ]
      }
    };
  }
  componentDidMount() {
    M.AutoInit();
    // var elems = document.querySelectorAll("select");
  }

  render() {
    return (
      <div className="container">
        <div class="child input-field col s12">
          <select>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Materialize Select</label>
        </div>
      </div>
    );
  }
}

export default JsonView;
