import axios from "axios";
import React, { Component } from "react";
import api from "../api";

export default class PersonAdd extends Component {
  state = { name: "" };
  handSub = (e) => {
      e.preventDefault()
      const user ={name:this.state.name}
    api.post("users",{user})
    .then(resp=>console.log(resp))
  };
  handChg = (e) => {
    this.setState({ name: e.target.value });
  };
  
  render() {
    return (
      <div>
        <hr />
        <form onSubmit={this.handSub}>
          <label>
            {" "}
            Person Name:
            <input
              type="text"
              name="inp"
              id="inp"
              style={{ marginLeft: "10px" }}
              value={this.state.name}
              onChange={this.handChg}
            ></input>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
