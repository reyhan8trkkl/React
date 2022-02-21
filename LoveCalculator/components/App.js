import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import Result from "./Result";
import Title from "./Title";

export default class App extends Component {
  render() {
    return (
      <div className="appcss">
        <Title />
        <Input />
      </div>
    );
  }
}
