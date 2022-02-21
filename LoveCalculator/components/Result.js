import React, { Component } from "react";


export default class Result extends Component {
  state = {
    percentage: "55",
  };
  constructor(props) {
    super(props);
  }

  randnum = () => {
    this.setState({ percentage: Math.floor(Math.random() * 100) });
    return (document.getElementById("ilk").innerHTML = `% ${this.state.percentage}`);
  };

  gg = () => {
    if (this.props.inputn[0] === "" || this.props.inputn[1] === "") {
      return "disabled";
    }
  };

  jj = () => {
    if (this.props.inputn === "") {
      return "";
    } else {
      this.randnum();
    }
  };

  render() {
    return (
      <div>
        <div className="mt-4 text-center" id="btnres">
          <button id="btn1"
            onClick={this.props.clear}
            className="btn btn-secondary btnClearForm"
          >
            <b>Clear Form</b>
          </button>
          <button id="btn2"
            onClick={this.jj}
            disabled={this.gg()}
            className="btn btn-danger btnLovePercent"
          >
            <b>Calculate</b>
          </button>
        </div>
        <p id="ilk"></p>
      </div>
    );
  }
}
