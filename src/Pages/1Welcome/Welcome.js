import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="child">
          <p className="flow-text">
            This is a scratch pad where I try things out in React.
          </p>
          <p className="flow-text">
            Some of pages are simply notes, or tidbits I found on a blog or in a
            project. Other pages might be syntax pratice / experements with an
            npm package or some CSS. Other components are thigns I want to try
            outside of another app before I decide how to use them. Some of it
            is for fun.
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
