import React, { Component } from "react";
import Contact from "./Contact";
export default class App extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Contact />
      </div>
    );
  }
}
