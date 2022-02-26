import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <h1 className="text-center text-info mt-3">React Dynamic Router</h1>
          <div id="links">
          <Link to="/" >Home</Link>
          <br />
          <Link to="/blog/*">Go to Blog</Link><br/>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog/*" element={<Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
