// ./Pages/Disco.js

import React from "react";
import DiscoBox from "./SubComponents/DiscoBox";
import "./Disco.css";

class Disco extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.makeBoxes = this.makeBoxes.bind(this);
    this.getRandBoxSetRandColor = this.getRandBoxSetRandColor.bind(this);
    this.state = {
      numBoxes: 100,
      width: "10%",
      height: "0",
      paddingBottom: "10%",
      backgroundColor: "blue",
      margin: "5px",
      boxes: [],
      allColors: [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "Darkorange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen"
      ]
    };
  }

  componentDidMount() {
    this.makeBoxes();
    this.interval = setInterval(() => this.getRandBoxSetRandColor(), 10);
  }

  makeBoxes() {
    let boxesArray = Array(this.state.numBoxes)
      .fill()
      .map(this.getRandomColor);
    this.setState({ boxes: boxesArray });
  }

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.state.allColors.length);
    return this.state.allColors[colorIndex];
  }

  getRandBoxSetRandColor() {
    const boxes = this.state.boxes.slice();
    const randIndex = Math.floor(Math.random() * boxes.length);
    boxes[randIndex] = this.getRandomColor();
    this.setState({ boxes });
  }

  render() {
    return (
      <div className="discoDiv">
        <div className="discoBoxDiv">
          {this.state.boxes.map((color, index) => (
            <DiscoBox
              key={index}
              color={color}
              height={this.state.height}
              width={this.state.width}
              margin={this.state.margin}
              paddingBottom={this.state.paddingBottom}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Disco;
