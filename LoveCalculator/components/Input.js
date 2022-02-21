import React, { Component } from "react";
import Result from "./Result";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      secondName: "",
    };
  }
  clearInput = () => {
    this.setState({ firstName: "", secondName: "" });
    return (document.getElementById("ilk").innerHTML = "");
  };

  render() {
    const arr = [this.state.firstName, this.state.secondName];
    return (
      <div>
        <form className="mb-3 d-flex mt-3" id="myform">
          <label>
            {" "}
            Your name: 
            <input
              id="inp1"
              type="text"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            ></input>
          </label>
          {"+"}
          <label>
            {" "}
            Your partner's name:
            <input
              id="inp2"
              type="text"
              value={this.state.secondName}
              onChange={(e) => this.setState({ secondName: e.target.value })}
            ></input>
          </label>
        </form>
        <Result clear={this.clearInput} inputn={arr} />
      </div>
    );
  }
}
