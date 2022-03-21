import React from "react";
// import './App.css';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import AboutUs from "./AboutUs";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Candidates from "./Candidates";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function Home() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"></Link>
        <Link to="/candidates">Candidates </Link> |
        <Link to="/aboutus"> About Us</Link>
      </header>
      <div>
        
      </div>

      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label for="subject">Comment</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your Comment"
          />
          <button onClick={()=>alert("Mesajiniz Gonderildi")}>Submit</button>
          </form>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default Home;
