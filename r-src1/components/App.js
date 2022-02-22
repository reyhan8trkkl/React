import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="/home">Home</Link> <br />
          <Link to="/about">About</Link> <br />
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />    
          <Route path="/profile/:username" element={<Profile />} />          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }
}
