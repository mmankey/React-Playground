import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="child">
          <p className="flow-text">
            This is a space where I try things out in React.
          </p>
          <p className="flow-text">
            Some of this is like GitHub Gist where I make a few notes /
            examples. Other parts syntax pratice / experements with an npm
            package or some CSS.  Other parts are thigns I want to try
            outside of another app before I decide how to use them. Some of it
            is  for fun.
          </p>
          <p className="flow-text">
            These paragraphs are formatted using materializecss.com's flow-text
            feaure that resizes text based on the size of the screen. I think it
            is pretty neat.
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
