// ./Pages/JsonView.js

import React from "react";

class JsonView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      configData: {
        company: "Big Company",
        views: [
          { name: "Human Resources", filter: "filter", hilight: "field1" },
          { name: "Accounting", filter: "filter2", hilight: "field2" }
        ],
        data: [
          { id: 1, type: "accounting", stuff: "Good numbers!" },
          { id: 2, type: "hr", stuff: "Jim Johnson" },
          { id: 3, type: "accounting", stuff: "Bad numbers!" },
          { id: 4, type: "hr", stuff: "Jane Johnson" }
        ]
      }
    };
  }

  render() {
    return <div>Hello World</div>;
  }
}

export default JsonView;
