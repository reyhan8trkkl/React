import React, { Component } from "react";
import UserList from "./UserList";
import PersonList from "./PersonList";
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="appcss">
       <PersonList/>
      </div>
    );
  }
}
