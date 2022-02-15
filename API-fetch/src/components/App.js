import React, { Component } from "react";
import UserList from "./UserList";
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="appcss">
        <UserList />
      </div>
    );
  }
}
