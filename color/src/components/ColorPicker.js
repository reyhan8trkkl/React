import React from "react";
import { Button } from "./Button";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [120, 50, 50],
    };
  }
  chooseColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    this.setState({ color: [r, g, b] });
  };

  componentDidMount() {
    this.applyColor();
    console.log(
      "i invoked immediately after component is mounted, just one time at the beginning; after render method"
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "i invoked immediately after updating occurs, upon every change."
    );
    this.applyColor();
  }

  isLight() {
    let sonuc = this.state.color.reduce((a, b) => a + b, 0) / 3;
    return sonuc < 128 ? false : true; // it should return true or false according to the given array;
  }

  formatColor(colorArr) {
    return "rgb(" + colorArr.join(", ") + ")";
  }

  applyColor = () => {
    document.body.style.backgroundColor = this.formatColor(this.state.color);
    // this.chooseColor()
  };
  render() {
    return (
      <div>
        <h1 className={this.isLight() ? "black" : "white"}>
          Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button oclick={this.chooseColor} isLight={this.isLight}>
          <p>Hi, im color picker</p>
        </Button>
      </div>
    );
  }
}

export default ColorPicker;
